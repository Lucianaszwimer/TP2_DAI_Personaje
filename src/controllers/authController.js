import jwt from "jsonwebtoken";
import "dotenv/config";
import router from "./personajeController";

router.get('', Authenticate, async (req, res) => {
});

router.get('/:id', Authenticate, async (req, res) => {
});

router.post('', Authenticate, async (req, res) => {
});

router.put('/:id', Authenticate, async (req, res) => {
});

router.delete('/:id', Authenticate, async (req, res) => {
});

const getRandomString = () => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 18; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  };

  export default router;