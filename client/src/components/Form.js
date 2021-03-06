import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Result from './Result';

class Form extends Component {

constructor(){
  super();
  this.state = {
    addr:'',
    name:'',
    result:[]

  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

}

onChange(e) {
  this.setState({[e.target.name]: e.target.value});
}



onSubmit(e){
  e.preventDefault();

  const newQuery={
    address:this.state.addr,
    name:this.state.name,
    placetype:this.state.placetype
  }

  axios.post('/getplaces', qs.stringify(newQuery))
  .then((result)=>{
    this.setState({result: result.data});

})
.catch((err)=>{
  console.log(err);

})
}

  render() {
    return (
      <div>
      <div className="jumbotron text-center">
        <h1>Search</h1>
        <p>for searching places of interest</p>
      </div>

      <div className="row container text-center">
          <div className="col-sm-12">
            <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="addr">Enter address:</label>
        <input
          id="addr"
            name="addr"
              className="form-control"
                type="text"
                  placeholder="Enter address..."
                  value={this.state.addr}
                  onChange={this.onChange}
                    />
        <p></p>
        <label htmlFor="name">Enter name:</label>
        <input
            id="name"
                name="name"
                    className="form-control"
                        type="text"
                            placeholder="Enter name..."
                            value={this.state.name}
                            onChange={this.onChange}
                                />
        <p></p>
        <label htmlFor="type">Select type of place:</label>
        <p></p>
        <select id="places-type"
         name="placestype"
         className="form-control"
         value={this.state.placetype}
         onChange={this.onChange}
         >
        <option value="accounting">Accounting</option>
        <option value="airport">Airport</option>
        <option value="amusement_park">Amusement Park</option>
        <option value="aquarium">Aquarium</option>
        <option value="art_gallery">Art Gallery</option>
        <option value="atm">Atm</option>
        <option value="bakery">Bakery</option>
        <option value="bank">Bank</option>
        <option value="bar">Bar</option>
        <option value="beauty_salon">Beauty Salon</option>
        <option value="bicycle_store">Bicycle Store</option>
        <option value="book_store">Book Store</option>
        <option value="bowling_alley">Bowling Alley</option>
        <option value="bus_station">Bus Station</option>
        <option value="cafe">Cafe</option>
        <option value="campground">Campground</option>
        <option value="car_dealer">Car Dealer</option>
        <option value="car_rental">Car Rental</option>
        <option value="car_repair">Car Repair</option>
        <option value="car_wash">Car Wash</option>
        <option value="casino">Casino</option>
        <option value="cemetery">cemetery</option>
        <option value="church">church</option>
        <option value="city_hall">city_hall</option>
        <option value="clothing_store">clothing_store</option>
        <option value="convenience_store">convenience_store</option>
        <option value="courthouse">courthouse</option>
        <option value="dentist">dentist</option>
        <option value="department_store">department_store</option>
        <option value="doctor">doctor</option>
        <option value="electrician">electrician</option>
        <option value="electronics_store">electronics_store</option>
        <option value="embassy">embassy</option>
        <option value="fire_station">fire_station</option>
        <option value="florist">florist</option>
        <option value="funeral_home">funeral_home</option>
        <option value="furniture_store">furniture_store</option>
        <option value="gas_station">gas_station</option>
        <option value="gym">gym</option>
        <option value="hair_care">hair_care</option>
        <option value="hardware_store">hardware_store</option>
        <option value="hindu_temple">hindu_temple</option>
        <option value="home_goods_store">home_goods_store</option>
        <option value="hospital">hospital</option>
        <option value="insurance_agency">insurance_agency</option>
        <option value="jewelry_store">jewelry_store</option>
        <option value="laundry">laundry</option>
        <option value="lawyer">lawyer</option>
        <option value="library">library</option>
        <option value="liquor_store">liquor_store</option>
        <option value="local_government_office">local_government_office</option>
        <option value="locksmith">locksmith</option>
        <option value="lodging">lodging</option>
        <option value="meal_delivery">meal_delivery</option>
        <option value="meal_takeaway">meal_takeaway</option>
        <option value="mosque">mosque</option>
        <option value="movie_rental">movie_rental</option>
        <option value="movie_theater">movie_theater</option>
        <option value="moving_company">moving_company</option>
        <option value="museum">museum</option>
        <option value="night_club">night_club</option>
        <option value="painter">painter</option>
        <option value="park">park</option>
        <option value="parking">parking</option>
        <option value="pet_store">pet_store</option>
        <option value="pharmacy">pharmacy</option>
        <option value="physiotherapist">physiotherapist</option>
        <option value="plumber">plumber</option>
        <option value="police">police</option>
        <option value="post_office">post_office</option>
        <option value="real_estate_agency">real_estate_agency</option>
        <option value="restaurant">restaurant</option>
        <option value="roofing_contractor">roofing_contractor</option>
        <option value="rv_park">rv_park</option>
        <option value="school">school</option>
        <option value="shoe_store">shoe_store</option>
        <option value="shopping_mall">shopping_mall</option>
        <option value="spa">spa</option>
        <option value="stadium">stadium</option>
        <option value="storage">storage</option>
        <option value="store">store</option>
        <option value="subway_station">subway_station</option>
        <option value="supermarket">supermarket</option>
        <option value="synagogue">synagogue</option>
        <option value="taxi_stand">taxi_stand</option>
        <option value="train_station">train_station</option>
        <option value="transit_station">transit_station</option>
        <option value="travel_agency">travel_agency</option>
        <option value="veterinary_care">veterinary_care</option>
        <option value="zoo">zoo</option>

      </select>
      <p></p>
      <input type="submit" value="Send" formaction="/getplaces"/>
      </div>
      </form>
          </div>
        </div>
        <Result list ={this.state.result}/>
      </div>
    );
  }
}

export default Form;
