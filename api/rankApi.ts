import axios from 'axios';
import * as auth from 'firebase/auth';
import { useCallback } from 'react';
const baseUrl = process.env.API_URL;

const useRank= () => {
    const getRanks = useCallback( async () => {
        const token= await auth.getAuth().currentUser?.getIdToken();
        const { data } = await axios.get(baseUrl!+'/ranks', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        return data;
    },[]);

    return { getRanks };
}

export default useRank;