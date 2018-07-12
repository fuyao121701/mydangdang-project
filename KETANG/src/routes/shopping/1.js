(<div style={{width:'100%'}}>
    <div style={{float:'left',marginTop:'.4rem'}}>
        <InputNumber
            size="large" min={1}
            defaultValue={1}
            style={{width:'2.5rem'}}/>
        <div><Icon
            type="delete"
            style={{fontSize:'.43rem',float:'right',marginTop:'.5rem'}}/></div>
    </div>
    <div
        style={{float:'right',backgroundColor:'#f0f0f0',padding:'1rem .35rem',fontSize:'.3rem'}} onClick={()=>{this.setState({compile:false})}}
    >完成</div>
</div>)