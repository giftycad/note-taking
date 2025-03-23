import Router from 'express';
import { getId, getNote, postNote } from '../controllers/note_controller.js';
import { registerUser } from '../controllers/user_controller.js';




export const noteRouter = Router();

noteRouter.get('/notes', getNote);
noteRouter.post('/notes', postNote);
noteRouter.get('/notes/:id', getId)
noteRouter.post('/users', registerUser)
























// noteRouter.get('/', getNote );

//export default noteRouter;


// app.listen(prompt, () =>{
//     console.log(`server is listening to port ${port}`)
// })