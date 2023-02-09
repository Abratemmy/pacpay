import React from 'react';
// source of data
const appBeneficiaries = [
  {
    id: '001',
    firstName: 'Peter',
    lastName: 'Wande',
  },
  {
    id: '002',
    firstName: 'Paul',
    lastName: 'Cole',
  },
  {
    id: '003',
    firstName: 'Tunde',
    lastName: 'Smith',
  },
];
const dummyRsaBeneficiaries = [
  {
    id: '001',
    firstName: 'Peter',
    lastName: 'Wande',
    percentage: 50,
  },
];
//
function RSAScreen({}) {
  const [rsaBeneficiaries, setRsaBeneficiaries] = React.useState([]);
  const getPersistedRsaBeneficiaries = React.useCallback(async () => {
    // retrieve this from the server or any other means of storage
    // this might return an empty array for the first time or when you haven't added any before
    console.log('Retrieving RSA Beneficiaries.....');
    return await dummyRsaBeneficiaries;
  }, []);
  const saveOrPersisRsaBeneficiaries = React.useCallback(async () => {
    // after you are done with your updates you need to save/persist this value in order to get changes back when visiting this screen again
    // call your storage or endpoint
    console.log('Saving RSA beneficiaries ....', rsaBeneficiaries);
  }, [rsaBeneficiaries]);
  const addRsaBeneficiariesFromApp = React.useCallback(async (list = []) => {
    // NB: @list is an array of new beneficiaries to add, the size should not be less than one
    // This is the callback that runs when you open the Global beneficiary modal
    // and choose to add your desired beneficiary(ies) to the current RSA beneficiaries
    // TODO: Find a way to ensure you do not duplicates
    setRsaBeneficiaries((prev) => [...prev, ...list]);
  }, []);
  // @uniqueId should be a unique key e.g index or id
  // @key: the field to update e.g percentage
  // @value: the value of the field to update e.g 30
  const updateRsaBeneficiaries = React.useCallback(async (uniqueId, key, value) => {
    // you could choose to modify the local RSA Beneficiaries,
    // retrieve this from the server or any other means of storage
    // this might return an empty array for the first time or when you haven't added any before
    const uniqueIdkey = 'id';
    setRsaBeneficiaries((prev) =>
      prev.map((item) => {
        if (item[uniqueIdkey] !== uniqueId) {
          return item;
        }
        return {
          ...item,
          [key]: value,
        };
      }),
    );
  }, []);
  const deleteRsaBeneficiary = React.useCallback(async (uniqueId) => {
    // you could choose to delete the local RSA Beneficiaries,
    const uniqueIdkey = 'id';
    setRsaBeneficiaries((prev) => {
      const newBeneficiaries = prev.filter((item) => item[uniqueIdkey] !== uniqueId);
      return newBeneficiaries;
    });
  }, []);
  const printRsaBeneficiaries = React.useCallback(
    async (uniqueId) => {
      // you could choose to print or list the local RSA Beneficiaries,
      rsaBeneficiaries.map((item, index) => {
        console.log(
          `RSA Beneficiary ${index + 1}: ${item.firstName} - ${item.lastName} - ${
            item.percentage
          }%  \n`,
        );
      });
    },
    [rsaBeneficiaries],
  );
  const handleBeneficiaryPercentageChange = React.useCallback(
    async (uniqueId, value) => {
      // you should pass this to your input field
      updateRsaBeneficiaries(uniqueId, 'percentage', value);
    },
    [updateRsaBeneficiaries],
  );
  React.useEffect(() => {
    const initBeneficiaries = async () => {
      // attempt to get the persisted rsaBeneficiaries list when screen mounts
      setRsaBeneficiaries(await getPersistedRsaBeneficiaries());
    };
    initBeneficiaries();
  }, [getPersistedRsaBeneficiaries]);
}