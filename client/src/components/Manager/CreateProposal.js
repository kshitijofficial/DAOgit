import "./manager.css"
function CreateProposal({state,account}){
    
    async function proposalCreation(event){
       try{
           event.preventDefault();//page will not reload if form get submitted
           const {contract}=state;
           const description = document.querySelector("#description").value;
           const amount = document.querySelector("#amount").value;
           const recipient = document.querySelector("#recipient").value;
           await contract.methods.createProposal(description,amount,recipient).send({from:account,gas:480000});
       }catch(error){
        alert(error)
       }
       window.location.reload()
    }
    return<><form onSubmit={proposalCreation}>
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Neeed(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <button className="button" type="submit">Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;