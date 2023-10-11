import React from "react";
import { Line } from "../../components/Line";
import { NavItems } from "../../components/NavItems";
import "./style.css";

export const RequestList = () => {
  return (
    <div className="request-list">
      <div className="div">
        <div className="overlap">
          <div className="navbar">
            <div className="user-info">
              <div className="avatar-status">
                <div className="overlap-group">
                  <div className="online">
                    <div className="dot" />
                  </div>
                </div>
              </div>
              <div className="overlap-2">
                <div className="user-name">Kashem Khan</div>
                <div className="user-role">Admin</div>
              </div>
            </div>
            <div className="customs-logo">
              <div className="text-wrapper">Spectrum Engineering Consortium Ltd.</div>
            </div>
          </div>
          <img
            className="spectrum-logo-ai"
            alt="Spectrum logo ai"
            src="https://c.animaapp.com/V9LCUY8L/img/spectrum-logo-ai--1--1@2x.png"
          />
        </div>
        <div className="menu">
          <div className="nav-menu-wrapper">
            <div className="nav-menu">
              <div className="nav-menu-v">
                <div className="item">
                  <div className="overlap-group-2">
                    <div className="dashboards-wrapper">
                      <div className="dashboards-2">Dashboard</div>
                    </div>
                    <img
                      className="ic-outline-space"
                      alt="Ic outline space"
                      src="https://c.animaapp.com/V9LCUY8L/img/ic-outline-space-dashboard.svg"
                    />
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-3">
                    <div className="menu-background">
                      <img className="img" alt="Background" src="https://c.animaapp.com/V9LCUY8L/img/background.svg" />
                      <div className="overlap-4">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-3">
                            <div className="group">
                              <div className="menu-background-2">
                                <img
                                  className="img"
                                  alt="Group"
                                  src="https://c.animaapp.com/V9LCUY8L/img/group-10@2x.png"
                                />
                                <div className="icon-list">
                                  <div className="group-2">
                                    <div className="frame">
                                      <div className="rectangle" />
                                      <div className="rectangle" />
                                      <div className="rectangle" />
                                    </div>
                                    <div className="frame-2">
                                      <div className="ellipse" />
                                      <div className="ellipse" />
                                      <div className="ellipse" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <NavItems
                              className="nav-items-instance"
                              dashboardsClassName="design-component-instance-node"
                              text="Employee List"
                            />
                          </div>
                        </div>
                        <img
                          className="icon-entry"
                          alt="Icon entry"
                          src="https://c.animaapp.com/V9LCUY8L/img/icon-entry.svg"
                        />
                      </div>
                    </div>
                    <NavItems className="nav-items-2" dashboardsClassName="nav-items-3" text="Request List" />
                  </div>
                </div>
                <div className="item-2" />
                <div className="item-3" />
              </div>
              <div className="item-4" />
              <div className="item-5" />
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="row" />
          <div className="row-2" />
          <div className="row-3" />
          <div className="row-4" />
          <div className="row-5" />
          <div className="row-6" />
          <div className="row-7" />
          <div className="line-wrapper">
            <img className="line-2" alt="Line" src="https://c.animaapp.com/V9LCUY8L/img/line-39-6.svg" />
          </div>
          <Line className="line-39" />
          <div className="img-wrapper">
            <img className="line-2" alt="Line" src="https://c.animaapp.com/V9LCUY8L/img/line-39-4.svg" />
          </div>
          <div className="line-3">
            <img className="line-2" alt="Line" src="https://c.animaapp.com/V9LCUY8L/img/line-39-6.svg" />
          </div>
          <div className="line-4">
            <img className="line-5" alt="Line" src="https://c.animaapp.com/V9LCUY8L/img/line-39-2.svg" />
          </div>
          <Line className="line-instance" />
          <div className="header" />
          <div className="rectangle-2" />
          <img className="c-line" alt="C line" src="https://c.animaapp.com/V9LCUY8L/img/c-line-3.svg" />
          <img className="c-line-2" alt="C line" src="https://c.animaapp.com/V9LCUY8L/img/c-line-4.svg" />
          <img className="c-line-3" alt="C line" src="https://c.animaapp.com/V9LCUY8L/img/c-line-3.svg" />
          <img className="c-line-4" alt="C line" src="https://c.animaapp.com/V9LCUY8L/img/c-line-6.svg" />
          <img className="c-line-5" alt="C line" src="https://c.animaapp.com/V9LCUY8L/img/c-line-1.svg" />
          <div className="text-wrapper-2">Email</div>
          <div className="verified">Verified?</div>
          <div className="text-wrapper-3">Action</div>
          <div className="text-wrapper-4">Verification</div>
          <div className="text-wrapper-5">Action</div>
          <div className="text-wrapper-6">Username</div>
          <div className="text-wrapper-7">Serial No.</div>
          <div className="text-wrapper-8">1</div>
          <div className="text-wrapper-9">Faius Mojumder Nahin</div>
          <div className="text-wrapper-10">faius.nahin@gmail.com</div>
          <div className="text-wrapper-11">kamrul.islam@gmail.com</div>
          <div className="mobusshar-islam">mobusshar.islam@gmail.com</div>
          <div className="atikul-islam-gmail">atikul.islam@gmail.com</div>
          <div className="raqibul-islam-gmail">raqibul.islam@gmail.com</div>
          <div className="sayeda-tanjila-gmail">sayeda.tanjila@gmail.com</div>
          <div className="istiyak-milon-gmail">istiyak.milon@gmail.com</div>
          <div className="waiting-for">Waiting For Verification</div>
          <div className="waiting-for-2">Waiting For Verification</div>
          <div className="waiting-for-3">Waiting For Verification</div>
          <div className="waiting-for-4">Waiting For Verification</div>
          <div className="waiting-for-5">Waiting For Verification</div>
          <div className="waiting-for-6">Waiting For Verification</div>
          <div className="waiting-for-7">Waiting For Verification</div>
          <div className="kamrul-islam-sharek">Kamrul Islam Sharek</div>
          <div className="text-wrapper-12">Md. Mobusshar Islam</div>
          <div className="text-wrapper-13">Md. Atikul Islam Atik</div>
          <div className="text-wrapper-14">Md. Raqibul Islam</div>
          <div className="text-wrapper-15">Sayeda Tanjila</div>
          <div className="text-wrapper-16">Istiyak Milon</div>
          <div className="text-wrapper-17">2</div>
          <div className="text-wrapper-18">3</div>
          <div className="text-wrapper-19">4</div>
          <div className="text-wrapper-20">6</div>
          <div className="text-wrapper-21">7</div>
          <div className="text-wrapper-22">5</div>
          <div className="vector-wrapper">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-7.svg" />
          </div>
          <div className="group-3">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-7.svg" />
          </div>
          <div className="group-3">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-7.svg" />
          </div>
          <div className="group-4">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-4.svg" />
          </div>
          <div className="group-5">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-4.svg" />
          </div>
          <div className="group-6">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-4.svg" />
          </div>
          <div className="group-7">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-7.svg" />
          </div>
          <div className="group-8">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/V9LCUY8L/img/vector-7.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
