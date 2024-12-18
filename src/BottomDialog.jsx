export default function BottomDialog(){
    return(
        <div className="bottom-dialog">
            <div className="sure-text">
                <h3>Are you absolutely sure?</h3>
            </div>
            <div className="action-text">
                <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
            </div>
            <div className="buttons">
                <button className="cancel-button">Cancel</button>
                <button className="continue-button">Continue</button>
            </div>
        </div>
    )
}