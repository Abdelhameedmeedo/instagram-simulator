import '../css-files/footer.css'
const Footer = (props)=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <i class="fas fa-home" onClick = {()=>props.footerHome()}></i>
                    </div>
                    <div className="col-4">
                        <i class="fas fa-user-cog" onClick = {()=>props.footerSetting()}></i>
                    </div>
                    <div className="col-4">
                        <i class="fas fa-user-circle" onClick = {()=>props.footerProfile()}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer