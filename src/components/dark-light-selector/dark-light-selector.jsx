import * as React from "react"
import { ButtonBase } from "@material-ui/core"
import * as styles from "./dark-light-selector.module.css"
import { ThemeContext } from "../../constants/theme-context"

export const DarkLightSelector = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <div
        className={`${styles.blueBtnContainer} ${
          colorMode === "light" ? styles.firstSelected : styles.secondSelected
        }`}
        aria-hidden={true}
      >
        <ButtonBase
          className={`${styles.blueBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("light")}
        >
          Light
        </ButtonBase>
        <ButtonBase
          className={`${styles.blueBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("dark")}
        >
          Dark
        </ButtonBase>
      </div>
      <div>
        <ButtonBase
          className={`${styles.greyBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("light")}
        >
          Light
        </ButtonBase>
        <ButtonBase
          className={`${styles.greyBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("dark")}
        >
          Dark
        </ButtonBase>
      </div>
    </div>
  )
}