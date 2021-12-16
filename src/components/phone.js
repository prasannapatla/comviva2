import React from 'react'

export default function phone() {
    var input = document.querySelector("#phone");
    window.intlTelInput(input);
    return (
      <div>
        <input name="phone" type="text" id="phone" />
      </div>
    );
}
