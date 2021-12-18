import React from 'react'
import {AccountType, TokenType} from './Interfaces';


type PropTypes = {
  account: AccountType
}

export default function Account({
  account
}: PropTypes) {
  return (
    <>
     
     
        <div className="tokens">
          {account.tokens.map(token => {
            if (token.has) {
            return (
              <div className="token" key={token.token}>
                <div className="balance">
                  <div className="balance-value">
                  Congrats! You have {token.balance} USDC. Since you have more than 1 you can 
                  <a href="https://www.systempoetics.com/USDC">Proceed.</a>
                  </div>
                </div>
              </div>

            )
            }else{
              return (
                <div className="token" key={token.token}>
                  <div className="balance">
                    <div className="balance-value">
                    In order to proceed you need 1 or more USDC tokens.
                    </div>
                  </div>
                </div>
  
              ) 
            }
          })}
        </div>
        <div>&nbsp;</div>
        <div className="account">
        <div className="address">
          <small>FYI you are using wallet: {account.address}</small>
        </div>
      </div>
    </>
  )
}