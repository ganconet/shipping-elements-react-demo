import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Mocking typescript definitions for the Shippo SDK, these can be provided if desired
 */
declare global {
  interface Window { shippo: any; }
}
window.shippo = window.shippo || {};

function App() {

  /**
   * Storing an authentication token in state for the sake of this example, this typically should come from a backend
   */
  const [token, setToken] = React.useState<string>("");

  /**
   * Listens for events and activity from the widget, see https://docs.goshippo.com/docs/shippingelements/events
   */
  const listenForEvents = React.useCallback(() => {
    if (window.shippo) {
      window.shippo.on('CLOSE_BUTTON_CLICKED', (e: any) => {
        console.log('Close button was clicked!', e);
      });
      window.shippo.on('LABEL_PURCHASED_SUCCESS', (e: any) => {
        console.log('Label was successfully purchased!', e);
      });
      window.shippo.on('ERROR', (e: any) => {
        console.error('An error occurred!', e);
      });
    }
  }, []);

  /**
   * Initializes the widget and opens the label purchase window in a specified container, see https://docs.goshippo.com/docs/shippingelements/install/
   */
  const purchaseLabel = React.useCallback(() => {
    if (window.shippo) {
      window.shippo.init({
        token,
        org: 'john-doe-industries',
        locale: 'en',
        // See customization options: https://docs.goshippo.com/docs/shippingelements/customisation/
        theme: {
          width: '600px',
          height: '800px',
        },
      });
      listenForEvents();
      // See interface for order information: https://docs.goshippo.com/docs/shippingelements/install/#orderdetails
      window.shippo.labelPurchase('#shippo-label-purchase', {
        address_to: {
          name: 'William Faulkner',
          company: '',
          street1: '916 Old Taylor Rd',
          city: 'Oxford',
          state: 'MS',
          zip: '38655',
          country: 'US',
          phone: '662-234-3284',
          email: 'william@rowanoak.com',
        },
        line_items: [
          {
            title: 'Book',
            sku: 'TS-123',
            quantity: 1,
            currency: 'USD',
            unit_amount: '12',
            unit_weight: '0.40',
            weight_unit: 'lb',
            country_of_origin: 'US',
          }
        ],
        order_number: '12345'
      });
    }
  }, [token, listenForEvents]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <div className="App-tokeninput">
          <label htmlFor="token">Paste in an authentication or API token into the input below and press the "Purchase Label" button.</label>
          <input id="token" type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Paste token here" />
        </div>
        <button className="App-purchase-label-btn" onClick={purchaseLabel}>Purchase Label</button>
        <div id="shippo-label-purchase" className="App-purchase-label-container"></div>
      </main>
    </div>
  );
}

export default App;
