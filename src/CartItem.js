import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
   // this.testing();
    }
    // testing(){
    //     const promise= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({qty:100});
    //         console.log('state',this.state);
    //     });
    // }
    increaseQuantity=()=>
    {
        //console.log('this',this.state);
        //setState Form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });
      //setState form 2
      this.setState((prevState)=>{
        return {
            qty:prevState.qty+1
        }
      });
    }
    decreaseQuantity=()=>
    {    const{ qty }=this.state;
         
       if(qty==0)
       {
        return;
       }
      //setState form 2
      this.setState((prevState)=>{
        return {
            qty:prevState.qty-1
        }
      });
    }
    render() {
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/262/262038.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img alt="decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/659/659892.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img alt="delete" className="action-icons" src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;