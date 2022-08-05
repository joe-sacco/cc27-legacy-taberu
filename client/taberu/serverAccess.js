const DB_URL = "http://localhost:8080"

useEffect(() => {
  // FOR LOGIN
  const accountInfo = {
    params: {
      email: "tomh@sample.com",
      password: "password",
    },
  };
  axios.get(`${DB_URL}/account`, accountInfo);
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

  axios.post(`${DB_URL}/account`, newAccountInfo);
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
    .get(`${DB_URL}/account/pincode`, accountInfo)
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
  axios.post(`${DB_URL}/account/${familyInfo.account_id}/family`, familyInfo);
}, []);

useEffect(() => {
  // FOR GET FAMILY
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

useEffect(() => {
  // FOR CREATE RECIPE
  const familyInfo = {
    name: "Kugai",
  };
  axios.post(`${DB_URL}/recipe`, familyInfo);
}, []);

useEffect(() => {
  // FOR GET RECIPE

  axios
    .get(`${DB_URL}/recipe`)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((error) => {
      // console.log(error.response.data);
    });
}, []);
