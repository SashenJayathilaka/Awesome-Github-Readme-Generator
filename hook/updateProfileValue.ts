import { ProfileAtomDetails } from "@/type";

function updateProfileValue() {
  const updateProfileStore = (
    storeValue: ProfileAtomDetails,
    setProfileDetails: (value: ProfileAtomDetails) => void
  ) => {
    if (storeValue) {
      setProfileDetails(storeValue);
    }
  };

  return { updateProfileStore };
}

export default updateProfileValue;
