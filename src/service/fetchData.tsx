
interface Product {

}

  export async function fetchData({variables, query}: any):  Promise<any> {
    try {
        // const { data } = await apolloClient.query( {
        //     query, 
        //     variables,
        //     fetchPolicy: "network-only",
        // });
        // return "";
        
    } catch (error) {
        throw error;
    }
  }
  