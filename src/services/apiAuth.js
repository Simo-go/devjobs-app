import { supabase } from "./supabase";

export async function signUpUser() {
  const { data, error } = await supabase.auth.signUp({
    email: "rndsaasproject@gmail.com",
    password: "@Testing",
    options: {
      emailRedirectTo: "http://localhost:5173/home",
    },
  });

  console.log(data, error);
}

export async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "ndsaasproject@gmail.com",
    password: "@Testin",
  });

  console.log(error);
}
