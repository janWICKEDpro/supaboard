import supabase from "../integrations/supabaseClient.js";

async function anonymousSignIn() {
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) {
    console.log("An Error Occured while Signin in", error);
    throw new Error(error);
  }
  console.log("The data is ", data);
  return data;
}

export default anonymousSignIn;
