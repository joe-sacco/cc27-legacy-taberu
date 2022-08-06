/*!!!Please copy this DB_URL when you use the server access methods!!!*/
const DB_URL = process.env.ENVIRONMENT ? "https://taberu-server.herokuapp.com" : "http://localhost:8080";

//-----------------FOR LOGIN-----------------
useEffect(() => {
  const accountInfo = {
    params: {
      email: "tomh@sample.com",
      password: "password",
    },
  };
  axios.get(`${DB_URL}/account`, accountInfo);
}, []);

//-----------------FOR SIGN-UP-----------------
useEffect(() => {
  const newAccountInfo = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    pincode: "",
    image: null,
  };

  axios.post(`${DB_URL}/account`, newAccountInfo);
}, []);

//-----------------FOR PINCODE-----------------
useEffect(() => {
  const accountInfo = {
    params: {
      id: 6,
      pincode: 1234,
    },
  };
  axios
    .get(`${DB_URL}/account/pincode`, accountInfo)
    .then((res) => {
      if (res.status === 200) {
        // LOGGED IN
      }
    })
    .catch((error) => console.log(error.response.data));
}, []);

//-----------------FOR CREATE FAMILY-----------------
useEffect(() => {
  const familyInfo = {
    account_id: 6,
    first_name: "Pikachu",
    last_name: "Kugai",
  };
  axios.post(`${DB_URL}/account/${familyInfo.account_id}/family`, familyInfo);
}, []);

//-----------------FOR GET FAMILY-----------------
useEffect(() => {
  const accountId = {
    params: {
      account_id: 6,
    },
  };
  axios
    .get(`${DB_URL}/account/${accountId.params.account_id}/family`, accountId)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((error) => {
      // console.log(error.response.data);
    });
}, []);

//-----------------FOR CREATE RECIPE-----------------
useEffect(() => {
  const familyInfo = {
    name: "Kugai",
  };
  axios.post(`${DB_URL}/recipe`, familyInfo);
}, []);

//-----------------FOR GET RECIPE-----------------
useEffect(() => {
  axios
    .get(`${DB_URL}/recipe`)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((error) => {
      // console.log(error.response.data);
    });
}, []);
