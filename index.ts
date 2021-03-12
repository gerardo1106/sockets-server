
import Server from "./Clases/Server";
import router from "./routes/router";
import bodyParser  from "body-parser";
import cors from "cors";

const server = new Server();
//body parser

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//Cors
server.app.use(cors({origin:true, credentials:true}));

//Rutas de servicios
server.app.use('/',router);

server.start(() => {
    console.log("servidor corriendo en el port " + server.port);
});

