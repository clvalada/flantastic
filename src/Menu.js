/* global ShopifyBuy */

import React, { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const client = ShopifyBuy.buildClient({
        domain: 'crunchmoto.myshopify.com',
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
      });

      ShopifyBuy.UI.onReady(client).then(ui => {
        ui.createComponent('collection', {
          id: '318865768623',
          node: document.getElementById('collection-component-1707406342367'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                  }
                },
                "button": {
                  "font-family": "Oxygen, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#cfb28d"
                  },
                  "background-color": "#e6c69d",
                  ":focus": {
                    "background-color": "#cfb28d"
                  },
                  "border-radius": "8px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "buttonDestination": "modal",
              "contents": {
                "options": false
              },
              "text": {
                "button": "View product"
              },
              "googleFonts": [
                "Oxygen"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Oxygen, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#cfb28d"
                  },
                  "background-color": "#e6c69d",
                  ":focus": {
                    "background-color": "#cfb28d"
                  },
                  "border-radius": "8px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              "googleFonts": [
                "Oxygen"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Oxygen, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#cfb28d"
                  },
                  "background-color": "#e6c69d",
                  ":focus": {
                    "background-color": "#cfb28d"
                  },
                  "border-radius": "8px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Oxygen"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Oxygen, sans-serif",
                  "background-color": "#e6c69d",
                  ":hover": {
                    "background-color": "#cfb28d"
                  },
                  ":focus": {
                    "background-color": "#cfb28d"
                  }
                },
                "count": {
                  "font-size": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                "iconPath": {
                  "fill": "#000000"
                }
              },
              "googleFonts": [
                "Oxygen"
              ]
            }
          },
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="menu">
      <h1>Menu</h1>
      <br />
      <div className="menu-description">
        <p>Indulge in the rich heritage of Cuban cuisine with our exquisite Cuban Flan, a tantalizing dessert that pays homage to the vibrant flavors of the Caribbean. Our Cuban Flan, crafted with love using our secret family recipe is available in two sizes; individually- packaged single-serving and large which serves 8-12 people. Cuban Flan is the ideal choice for gatherings, celebrations, or simply to satisfy your sweet tooth cravings with friends and family.</p>
        <p>Our Cuban Flan features a velvety smooth custard base infused with hints of creamy vanilla and caramelized sugar, creating a harmonious symphony of flavors that dance on your palate with every decadent bite. Each slice is a celebration of tradition and culture, transporting you to the sun-kissed shores of Cuba with its authentic taste and irresistible allure.</p>
      </div>
      <div id="collection-component-1707406342367"></div>
    </div>
  );
}

export default Menu;
