  useEffect(() => {
    // FOR LOGIN
    const accountInfo = {
      params: {
        email: "tomh@sample.com",
        password: "password",
      },
    };
    axios.get("http://localhost:8080/account", accountInfo);
  }, []);

  useEffect(() => {
    // FOR SIGN-UP
    const newAccountInfo = {
      first_name: "juli",
      last_name: "Kugai",
      email: "tomomik@sample.com",
      password: "password",
      pincode: 1234,
      image: null,
    };

    axios.post("http://localhost:8080/account", newAccountInfo);
  }, []);

  useEffect(() => {
    // FOR PINCODE
    const accountInfo = {
      params: {
        id: 6,
        pincode: 1234,
      },
    };
    axios
      .get("http://localhost:8080/account/pincode", accountInfo)
      .then((res) => {
        if (res.status === 200) {
          // LOGGED IN
        }
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  useEffect(() => {
    // FOR CREATE FAMILY
    const familyInfo = {
      account_id: 6,
      first_name: "Pikachu",
      last_name: "Kugai",
    };
    axios.post("http://localhost:8080/account/6/family", familyInfo);
  }, []);

  useEffect(() => {
    // FOR GET FAMILY
    const accountId = {
      params: {
        account_id: 6,
      },
    };
    axios
      .get("http://localhost:8080/account/6/family", accountId)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }, []);

  useEffect(() => {
    // FOR CREATE RECIPE
    const familyInfo = {
      name: "Kugai",
    };
    axios.post("http://localhost:8080/recipe", familyInfo);
  }, []);

  useEffect(() => {
    // FOR GET RECIPE

    axios
      .get("http://localhost:8080/recipe")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }, []);
