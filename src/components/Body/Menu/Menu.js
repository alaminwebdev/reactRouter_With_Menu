import React, { Component } from 'react'
import MenuList from './MenuList'
import { menuInfo } from '../../../data/Info'
export class Menu extends Component {

    state={
        menu : menuInfo,
        selectedMenu: null
    }

    selectFromMenu = itemId =>{
        //console.log(item);
        const updateMenu = this.state.menu.filter( menu =>
            menu.id === itemId)[0];
        this.setState({
            selectedMenu:updateMenu
        })

        this.props.history.push({
            pathname: '/menuitem',
            state: { updateMenu }
          })
        // when first click its return null , second click is ok  but if you want to use console log then follow the code or use component did update 
        // this.setState({selectedMenu: updateMenu}, () => {
        //     console.log(this.state.selectedMenu);
        // });
    }

    //Or use this code 
    componentDidUpdate(){
        console.log(this.state.selectedMenu);
    }
    
   
    render() {
        console.log(this.props)
        const menus = this.state.menu.map((item , index)=>{
            return(
                    <MenuList
                        key={item.id}
                        menu={item}
                        selectMenu={ ()=>this.selectFromMenu(item.id)}
                />

                
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menus}
                </div>  
            </div>
        )
    }
}

export default Menu
