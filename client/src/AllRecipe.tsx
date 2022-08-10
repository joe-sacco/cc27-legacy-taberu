import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./App.css";
import "./styles/components/form.css";
import dummy from "./images/dummy.png";
import Upload from "./components/Upload";

const DB_URL = process.env.REACT_APP_DATABASE_URL
  ? ''
  : 'http://localhost:8080';

interface addRecipe {
  name: string;
}

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<
    {
      picture_path: any;
      id: number; name: string; review: number | undefined 
}[]
  >([]);
  const [newRecipe, setNewRecipe] = useState<{ name: string }>();
  const [reviewRecipeId, setReviewRecipeId] = useState<number | undefined>();

  useEffect(() => {
    axios
      .get(`${DB_URL}/recipe`)
      .then((res) => {
        if (res.data.length > allRecipes.length) {
          let lastIndex = allRecipes.length;
          setAllRecipes((prevRecipe) => [...prevRecipe, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<addRecipe>({
    defaultValues: {
      name: '',
    },
  });

  const newRecipeInfo = { name: "", picture_path: "" };
  const onSubmit = (data: any) => {
    newRecipeInfo.name = data.name;

    if (postFileData) {
      newRecipeInfo.picture_path = postFileData.myFile;
    }

    setNewRecipe(newRecipeInfo);
  };

  useEffect(() => {
    if (newRecipe) axios.post(`${DB_URL}/recipe`, newRecipe);
  }, [newRecipe]);

  const recipeRequestReview = {
    account_id: Number(localStorage.getItem('account_id')),
    recipe_id: reviewRecipeId,
    review_request: true,
  };
  useEffect(() => {
    if (reviewRecipeId) {
      axios.post(`${DB_URL}/recipe/requestReview`, recipeRequestReview);
    }
  }, [reviewRecipeId]);

  // upload image
  const [postFileData, setPostFileData] = useState<{myFile?: any}>({})
  const changeUploadFile = async (event: any) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setPostFileData({
      ...postFileData,
      myFile: base64,
    });
    event.target.value = '';
  };

  // convert base64
  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className='OwnerRecipe'>
      <main>
        <img src={dummy} alt="" />
        <Upload name="image" onChange={changeUploadFile}>Upload image</Upload>
        <div className="formArea_owRecipe">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='recipename'>
              Recipe Name <span>*</span>
            </label>
            <input
              type='text'
              id='recipename'
              placeholder='Please put the recipe name'
              {...register('name', { required: 'this is required' })}
            />
            <button>Add</button>
          </form>
        </div>
        <div className='textArea_owRecipe'>
          <h2>All Recipes</h2>
        </div>
        <div className="reviewArea_owRecipe">
          {allRecipes.reverse().map((recipe) => {
            let picture = recipe.picture_path;

            return (
              <div key={recipe.id} className="reviewAreaIn_owRecipe">
                <p>{recipe.name}</p>
                {recipe.picture_path ? (<img src={`${picture}`} alt="" />) : "" }
                <label>
                  {" "}
                  {/* 🍴 Review Request */}
                  <button
                    type="submit"
                    value={recipe.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setReviewRecipeId(recipe.id);
                    }}
                  >
                    Request Review
                  </button>
                </label>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default OwnerRecipe;
