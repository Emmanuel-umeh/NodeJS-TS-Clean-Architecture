import { services } from "@/infrastructure/driven-adapters/providers";
import { providers } from "./../infrastructure/driven-adapters/providers/index";
import { Container } from "@tsclean/core";
import { controllers } from "@/infrastructure/entry-points/api";

@Container({
  //   providers: [...services, ...providers],
  providers: [...providers, ...services],
  controllers: [...controllers],
})
export class AppContainer {}
