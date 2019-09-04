import React, { Component } from "react";
import { getList, addToList, deleteItem, updateItem } from "./ListFunctions";
import { Redirect, Link } from 'react-router-dom';

class List extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      term: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this); 
  }

  componentDidMount() {
    this.getAll(this.props.match.params.p);
  }

  onChange = event => {
    this.setState({ term: event.target.value, editDisabled: "disabled" });
    console.log(this.state.editDisabled);
  };

  getAll = (va) => {
    getList(va).then(data => {
      this.setState(
        {
          term: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    addToList(this.state.term,this.props.match.params.p).then(() => {
      this.getAll(this.props.match.params.p);
    });
  };

  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.term, this.state.id).then(() => {
      this.getAll();
    });
  };

  onEdit = (item, itemid, e) => {
    e.preventDefault();
    this.setState({
      id: itemid,
      term: item
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteItem(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item[1] === val) {
        data.splice(index, 1);
      }
	  return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div className="col-md-12">
        <h1>Toutes vos notes</h1> <br/>
        <br/>login: {this.props.match.params.p}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <div className="row">
              <div className="col-md-3">
                <label htmlFor="exampleInputEmail1" className="h4" style={{ marginTop: 15 }}>Nouvelle Notes</label>
              </div>
              <div className="col-md-6">
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={this.state.term || ""}
                  onChange={this.onChange.bind(this)}
                ></textarea>
              </div>
              <div className="col-md-2" style={{ marginTop: 15 }}>
                <button
                  className="btn btn-primary"
                  onClick={this.onSubmit.bind(this)}
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
          <br/>
          <button
            type="submit"
            onClick={this.onSubmit.bind(this)}
            className="btn btn-success btn-block"
          >
            
          </button>
        </form>
        <table className="table">
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item.note}</td>
                <td className="text-right">
                  <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item.note, item.note)}
                  >
                    Edit
                  </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    onClick={this.onDelete.bind(this, item.note)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;