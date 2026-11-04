import { useMutation } from "@tanstack/react-query";
import { updateProfile as apiUpdateProfile } from "../../services/apiAuth";

function useUpdateProfile() {
  const {
    mutate: updateProfile,
    isPending: isUpdatingProfile,
    error: updateError,
  } = useMutation({
    mutationFn: ({ field, value }) => apiUpdateProfile({ field, value }),
    onSuccess: (data, _, __, { client: queryClient }) => {
      queryClient.setQueryData(["user"], data);
    },
  });

  return { updateProfile, isUpdatingProfile, updateError };
}

export default useUpdateProfile;
