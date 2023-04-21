import { aliasNavToken } from "./aliasTokens/nav";
import { borders } from "./semanticTokens/borderTokens";
import { btnTokens } from "./semanticTokens/buttonToken";
import { cboxTokens } from "./semanticTokens/checkboxToken";
import { chipTokenDef } from "./semanticTokens/chipToken";
import { collapsibleNavTokenDef } from "./semanticTokens/collapsibleNavToken";
import { colorTokens } from "./semanticTokens/colorToken";
import { shadowsTokenDefinition } from "./semanticTokens/shadowsToken";
import { typographyTokens } from "./semanticTokens/typography";
import { typoDef } from "./semanticTokens/typoToken";

export const semanticTokens = {
  fonts: typographyTokens,
  colors: {
    ...colorTokens,
    ...btnTokens,
    ...cboxTokens,

    ...aliasNavToken,
    ...chipTokenDef,
    ...typoDef,
    ...collapsibleNavTokenDef,
  },
  shadows: shadowsTokenDefinition,
  borders: borders,
};
