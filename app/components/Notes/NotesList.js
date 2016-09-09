import React from 'react';

class NotesList extends React.Component {

  render(){
    var notes = this.props.notes.map((note, index) => <li className="list-group-item" key={index}>{note}</li>)

    return(
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}

export default NotesList