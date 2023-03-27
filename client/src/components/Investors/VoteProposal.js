import "./investors.css"
function VoteProposal({state,account}){
    async function shareTransfer(event){
        try{

            event.preventDefault();
            const {contract} = state;
            const id = document.querySelector("#voteId").value;
            await contract.methods.voteProposal(id).send({from:account,gas:480000})
        }catch(error){
            alert(error)
           }
           window.location.reload()
    }
  
    return<><form onSubmit={shareTransfer}>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <button className ="button" type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;