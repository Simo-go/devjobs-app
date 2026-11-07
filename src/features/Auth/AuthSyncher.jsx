import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getClaims, getUser } from "../../services/apiAuth";
import { supabase } from "../../services/supabase";

function AuthSyncher() {
  const queryClient = useQueryClient();

  useEffect(
    function () {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_OUT") {
          queryClient.setQueryData(["user"], null);
          queryClient.query({ queryKey: ["auth"], queryFn: getClaims });
        }
      });

      return () => data.subscription.unsubscribe();
    },
    [queryClient],
  );
}

export default AuthSyncher;
