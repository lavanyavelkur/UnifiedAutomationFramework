import { config } from "../../wdio.conf"
import config from "./config"

const LOGIN_BTN = '~loginButton'
const INVALID_CREDS_TXT = '//*[@text="Invalid username or password!"]'


class Login  extends config {

    wait_till_screen_displayed(){
        $(LOGIN_BTN ).waitForDisplayed()
    }

    is_on_login_screen(){
        if($(LOGIN_BTN ).isDisplayed()) return true
        return false
    }

    click_on_login_btn(){
        $(LOGIN_BTN ).click()
    }

    is_invalid_email_format_msg_displayed(){
        $(INVALID_CREDS_TXT).waitForDisplayed()
        return $(INVALID_CREDS_TXT).isDisplayed()
    }

   
}

export default new Login()