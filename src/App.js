import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <div className="headingMargin box">
    <div className={'columns'}>
    <div className={'column is-12'}>
    <button className="button is-success floatRight">
        Print
    </button>
    </div>
    </div>
    <div className="columns ">
    <img className="column is-1 imgRadius" src="favicon.ico" alt="invoice logo"/>
    <span className="column is-0"></span>
    <p className="column is-8"><b>Old Palm Golf Club</b>
    <br />Navjeevan Lane, Sector 21,<br /> Dist Kharghar,<br /> Navi Mumbai,
    Maharashtra 410210, <br />India</p>
    <div className="level-right lineHeight" >
    Contact No:<br />Email: <br />Gst No:
    </div>
    </div>
    <hr className="hrColor"></hr>
    <div className="columns">
    <span className="column is-9">Booking ID:</span>
    <span className="column is-2">Invoice No:</span>
    </div>
    <h3 className="bookingAlign">
    <b>Your Booking is Confirmed</b></h3>
    <div className="box columns">
    <div className="column dateDaysalign" >
    <div className="datealign">15</div><div className="is-relative daysAlign">
    Monday<br />May 2019</div>
    </div>

    <span className="column">Tee Time:09:30 AM</span>
    <span className="column">Game type:</span>
    <span className="column">Golfers:</span>
    </div>
    <div className="label">Golfers Details</div>
    <div className="box">
    <table className="StandardTable table standardTablewidth">
    <thead>
    <tr>
    <th ></th>
    <th >Name</th>
    <th >Email</th>
    <th >Contact</th>
    <th >Member Type</th>
    <th >Member Id</th>
    <th >Price</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Golfer 01</td>
    <td >Smith </td>
    <td>johnx@gmail.com</td>
    <td>8145658930</td>
    <td>Guest</td>
    <td>PPGC2664</td>
    <td>INR 4000/-</td>
  </tr>
  <tr>
    <td>Golfer 02</td>
    <td>Jackson</td>
    <td>94</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Golfer 03</td>
    <td>Jackson</td>
    <td>94</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr >
    <td>Golfer 04</td>
    <td>Jackson</td>
    <td>94</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>

  </tbody>
    </table>
    <div className="noteTextalign">
    <b>Note:</b> The slot price is Included Green Fee, Golf Cart, Range Balls, Driving
    Range Access, Insurance, Caddy Fee, Bottled Water
    </div>
    </div>
    <div style={{display:"flex"}}>
    <div style={{width:"42%"}}>
    <b className="label">Total Payable</b>
    <div className="box flexBoxwidth" >
    <table className="StandardTable table is-striped is-narrow is-hoverable standardTablewidth">
    <thead>
    <tr>
    <th >Fee type</th>
    <th >Amount</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Total Green Fees:</td>
      <td >INR 16,000/- </td>
    </tr>
    <tr>
      <td>Convenience Fees:</td>
      <td>INR 16,000/-</td>
    </tr>
    <tr>
      <td>Total Add-Ons Fees:</td>
      <td>INR 16,000/-</td>
    </tr>
    <tr >
      <td>Taxes:</td>
      <td>INR 16,000/-</td>
    </tr>
    <tr >
      <td>Coupon Discount:</td>
      <td>INR 16,000/-</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <div className="tableMargin">
    <b className="label">Add-ons</b>
    <div className="box flexBoxwidth">
    <table className="StandardTable table is-striped is-narrow is-hoverable boxheight">
    <thead >
    <tr>
    <th >Add-ons</th>
    <th >Rent</th>
    <th >Unit</th>
    <th >Sub Total</th>

    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Total Green Fees:</td>
      <td >INR 16,000/- </td>
      <td >INR 16,000/- </td>
      <td >INR 16,000/- </td>

    </tr>
    <tr>
      <td>Convenience Fees:</td>
      <td>INR 16,000/-</td>
      <td >INR 16,000/- </td>
      <td >INR 16,000/- </td>

    </tr>
    <tr>
      <td>Total Add-Ons Fees:</td>
      <td>INR 16,000/-</td>
      <td >INR 16,000/- </td>
      <td >INR 16,000/- </td>

    </tr>
    </tbody>
    </table>
    </div>
    </div>

    </div>
    <br />
    <div className="box grandtotaldisplay">
    <b className="grandtotalwidth">{"Grand Total:"}</b>
    <b >{ "INR 16,000/- "}</b>
    </div>
    <hr className="hrColor"></hr>
    <div>
    <b>Terms & Conditions</b>
    <p>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    s been the industry's standard dummy text.<br />
    3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text.</p>
    </div>
    </div>
  );
}

export default App;
