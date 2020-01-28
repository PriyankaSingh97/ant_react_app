
// import React, { Component } from 'react';
// import { Button } from 'antd';



//  export class SearchComponent extends Component{


//     render(){
//         return(
//             <div>
   
//     <Button type="primary" icon="search">
//       Search
//     </Button>
   
//   </div>


//         )
//     }
// }

import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

// export class SearchComponent extends Component{
//     render(){
//     return(
//     <div>
//     <Search
//       placeholder="input search text"
//       onSearch={value => console.log(value)}
//       style={{ width: 200 }}
//     /></div>
        
        
//                 )
//             }
//         }

            export const SearchComponent = (props) => {
            let {className="", placeholder="", onSearch="",icon="", disabled="",size=""} = props;
            
            return (<Search  className={className} disabled={disabled} icon={icon} placeholder={placeholder}
                onSearch={onSearch }  data-test="Search-component" size={size}/>)
          }
          SearchComponent.propTypes = {
            placeholder: PropTypes.string,
            className: PropTypes.string,
            icon: PropTypes.string,
            disabled: PropTypes.bool,
            onSearch: PropTypes.func,
          }
          
        