const [isVisible,setVis] = useState(true);
const handclickV = () => {
  setVis(!isVisible,setVis)



}
import {Pnaryto} from './scrptr/pnaryto';
import {Umor} from './scrptr/umor';
import {Texst} from './scrptr/texst';
<div onClick={handclickV}>
  { isVisible && <Pnaryto/>}

  <Umor/>
  <Texst/>

</div>
