import React from "react";

const UserLogin = props => {
  return (
    <select className='userdropdown'
      onChange={props.selectUser}
    >
      <option value="jessjelly">jessjelly</option>
      <option value="tickle122">tickle122</option>
      <option value="grumpy19">grumpy19</option>
      <option value="happyamy2016">happyamy2016</option>
      <option value="cooljmessy">cooljmessy</option>
      <option value="weegembump">weegembump</option>
    </select>
  );

  
};

export default UserLogin;
