import {Container} from "@tsclean/core";
import {controllers} from "@/infrastructure/entry-points/api";

@Container({
    providers: [],
    controllers: [...controllers]
})

export class AppContainer {}
