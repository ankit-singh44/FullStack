import './App.css';
import Family from './prop_drill/Family';

function App() { 

  const familyInfo={
    familyName: "The Singh's",
    onlyForParents:()=>{
      return "Info for parents"
    },
    onlyForChild: ()=>{
      return "Info for Child"
    },
    onlyForGrandChildren:()=>{
      return "Info for Grand Children"
    },
    // onlyForGrandDaughter:()=>{
    //   return "Info for GrandDaughter"
    // }
  }
  return (
    <Family info={familyInfo}/>
  );
}

export default App;
