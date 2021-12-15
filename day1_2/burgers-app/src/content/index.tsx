import { Switch, Route} from 'react-router-dom';
import { Burgers } from "./burgers";
import { Admin } from "./admin";
import { Sign } from "./sign";
import { Welcome } from "./welcome";

export const Content = () => {
    return (
        <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/burgers">
                <Burgers />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/sign-in">
                <Sign />
            </Route>
        </Switch>
    )
}