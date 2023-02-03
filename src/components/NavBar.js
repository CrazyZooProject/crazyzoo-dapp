import React, { useState, useContext, useEffect } from "react";
// import { useState, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { wallets } from './wallet/constants';
import { useWeb3React } from '@web3-react/core';

import Modal from 'react-modal';

import "./NavBar.css";
import logoImg from '../assets/logo.png';


import Footer from "./Footer/Footer";

import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';


import { injected, walletconnector, bsc } from '../utils/connector';



function NavBar(props) {
  const [click, setClick] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const { account, chainId, activate, deactivate } = useWeb3React();
  const supportNetworkId = 5;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '20%',
      height: '500px',
      borderRadius: '15px',
      background: '#1E5135',
      paddingTop: '10px',
      minWidth: '250px',
      position: 'absolute'
    },
  }

  Modal.defaultStyles.overlay.backgroundColor = '#000000BF'
  Modal.defaultStyles.overlay.zIndex = "1000000"

  const matches = useMediaQuery('only screen and (min-width: 768px)');

  if (matches && click == true)
    setClick(false);

  const walletModalOpen = async () => {
    setOpen(true);
    // document.getElementsByClassName('welcome_part')[0].style.zIndex= '0';
  }

  const walletDisconnect = async () => {
    deactivate();
  }

  const closeModal = () => {
    setOpen(false);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const handleLogin = async (wname) => {
    if (wname === 'Wallet Connect') {
      activate(walletconnector);
    } else if (wname === 'Binance Wallet') {
      activate(bsc)
    } else {
      await activate(injected);
    }
    setOpen(false);
  }


  useEffect(() => {
    (async () => {
      if (account && chainId) {
        if (supportNetworkId !== chainId) {
          if (window.confirm("Your current Network is unsupportable. Would you like to change it") == true) {
            console.log(supportNetworkId.toString(16));
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x' + supportNetworkId.toString(16) }],
              });
            } catch (switchError) {
              // This error code indicates that the chain has not been added to MetaMask.
              if (switchError.code === 4902) {
                alert('add this chain id')
              }
            }
          }
        }
      }
    })();
  }, [chainId, account]);


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logoImg} className='logoImg' />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu unactive"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className={props.name == 'home' ? "nav-links active_nav" : "nav-links"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/staking"
                activeClassName="active"
                className={props.name == 'staking' ? "nav-links active_nav" : "nav-links"}
              >
                Staking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className={props.name == 'play' ? "nav-links active_nav" : "nav-links"}
              >
                Play
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className={props.name == 'community' ? "nav-links active_nav" : "nav-links"}
              >
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className={props.name == 'exchange' ? "nav-links active_nav" : "nav-links"}
              >
                Exchange
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className={props.name == 'team' ? "nav-links active_nav" : "nav-links"}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className={props.name == 'roadmap' ? "nav-links active_nav" : "nav-links"}
              >
                Roadmap
              </NavLink>
            </li>
            {click && (
              <>

                {!account ? (
                  <div className="enterzoodapp_div">
                    <button className="enterzoodapp" onClick={walletModalOpen}>
                      Enter Zoo Dapp
                    </button>
                  </div>
                ) : (
                  <div className="enterzoodapp_div">
                    <button className="enterzoodapp" onClick={walletDisconnect}>
                      {account.slice(0, 5) + '...' + account.slice(account.length - 4, account.length)}
                    </button>
                  </div>
                )}

                <Footer value={1} />
              </>
            )

            }

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-ellipsis-h"}></i>
          </div>
          {!account ? (
            <div className="enterzoodapp_div responsive_dapp"><button className="enterzoodapp" onClick={walletModalOpen}>Enter Zoo Dapp</button></div>
          ) : (
            <div className="enterzoodapp_div responsive_dapp"><button className="enterzoodapp" onClick={walletDisconnect}>{account.slice(0, 5) + '...' + account.slice(account.length - 4, account.length)}</button></div>
          )}
        </div>

      </nav>
      <Modal
        className={'walletModal'}
        onAfterOpen={afterOpenModal}
        isOpen={isOpen}
        closeModal={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <div className="walletmodal_title">
          <i className={"fas fa-times"}
            style={{
              background: 'transparent',
              width: '25px',
              color: 'white',
              border: '0',
              float: 'right',
              fontSize: '20px',
              cursor: "pointer"
            }}
            onClick={closeModal}></i>
          <br />
          <br />
          Connect Wallet
        </div>
        <br />
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className="wallet-modal__list__item"
          >
            <font className="font-size-14">{wallet.name}</font>
            <img src={wallet.icon} alt={wallet.name} />
          </div>
        ))}
      </Modal>
    </>
  );
}

export default NavBar;
