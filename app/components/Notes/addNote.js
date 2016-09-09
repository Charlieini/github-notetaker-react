import React from 'react';

class AddNote extends React.Component {
  handleSubmit(){
    let newnote = this.note.value;
    this.note.value = '';
    this.props.addNote(newnote)
  }
  setRef(ref){
    this.note = ref;
  }
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}> Submit </button>
        </span>
      </div>
    )
  }

}

AddNote.Proptypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote
