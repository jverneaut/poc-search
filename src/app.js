import { Base, createApp } from '@studiometa/js-toolkit';
import Search from './components/Search';

class App extends Base {
  static config = {
    name: 'App',
    components: { Search },
  };
}

export default createApp(App, document.body);
