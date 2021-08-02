import React from 'react';

import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img
                src="/assets/images/logo-icon.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div>
            <div>
              <h4 className="logo-text">Synadmin</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <i className="bx bx-first-page"></i>
            </div>
          </div>

          <ul className="metismenu" id="menu">
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div className="menu-title">Dashboard</div>
              </a>
              <ul>
                <li>
                  <a href="index.html">
                    <i className="bx bx-right-arrow-alt"></i>Analytics
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="bx bx-right-arrow-alt"></i>Sales
                  </a>
                </li>
                <li>
                  <a href="index3.html">
                    <i className="bx bx-right-arrow-alt"></i>eCommerce
                  </a>
                </li>
                <li>
                  <a href="index4.html">
                    <i className="bx bx-right-arrow-alt"></i>Alternate
                  </a>
                </li>
                <li>
                  <a href="index5.html">
                    <i className="bx bx-right-arrow-alt"></i>Hospitality
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-spa"></i>
                </div>
                <div className="menu-title">Application</div>
              </a>
              <ul>
                <li>
                  <a href="app-emailbox.html">
                    <i className="bx bx-right-arrow-alt"></i>Email
                  </a>
                </li>
                <li>
                  <a href="app-chat-box.html">
                    <i className="bx bx-right-arrow-alt"></i>Chat Box
                  </a>
                </li>
                <li>
                  <a href="app-file-manager.html">
                    <i className="bx bx-right-arrow-alt"></i>File Manager
                  </a>
                </li>
                <li>
                  <a href="app-contact-list.html">
                    <i className="bx bx-right-arrow-alt"></i>Contatcs
                  </a>
                </li>
                <li>
                  <a href="app-to-do.html">
                    <i className="bx bx-right-arrow-alt"></i>Todo List
                  </a>
                </li>
                <li>
                  <a href="app-invoice.html">
                    <i className="bx bx-right-arrow-alt"></i>Invoice
                  </a>
                </li>
                <li>
                  <a href="app-fullcalender.html">
                    <i className="bx bx-right-arrow-alt"></i>Calendar
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">UI Elements</li>
            <li>
              <a href="widgets.html">
                <div className="parent-icon">
                  <i className="bx bx-briefcase-alt-2"></i>
                </div>
                <div className="menu-title">Widgets</div>
              </a>
            </li>
            <li>
              <a href="javascript:;" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-cart-alt"></i>
                </div>
                <div className="menu-title">eCommerce</div>
              </a>
              <ul>
                <li>
                  <a href="ecommerce-products.html">
                    <i className="bx bx-right-arrow-alt"></i>Products
                  </a>
                </li>
                <li>
                  <a href="ecommerce-products-details.html">
                    <i className="bx bx-right-arrow-alt"></i>Product Details
                  </a>
                </li>
                <li>
                  <a href="ecommerce-add-new-products.html">
                    <i className="bx bx-right-arrow-alt"></i>Add New Products
                  </a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">
                    <i className="bx bx-right-arrow-alt"></i>Orders
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-gift"></i>
                </div>
                <div className="menu-title">Components</div>
              </a>
              <ul>
                <li>
                  <a href="component-alerts.html">
                    <i className="bx bx-right-arrow-alt"></i>Alerts
                  </a>
                </li>
                <li>
                  <a href="component-accordions.html">
                    <i className="bx bx-right-arrow-alt"></i>Accordions
                  </a>
                </li>
                <li>
                  <a href="component-badges.html">
                    <i className="bx bx-right-arrow-alt"></i>Badges
                  </a>
                </li>
                <li>
                  <a href="component-buttons.html">
                    <i className="bx bx-right-arrow-alt"></i>Buttons
                  </a>
                </li>
                <li>
                  <a href="component-cards.html">
                    <i className="bx bx-right-arrow-alt"></i>Cards
                  </a>
                </li>
                <li>
                  <a href="component-carousels.html">
                    <i className="bx bx-right-arrow-alt"></i>Carousels
                  </a>
                </li>
                <li>
                  <a href="component-list-groups.html">
                    <i className="bx bx-right-arrow-alt"></i>List Groups
                  </a>
                </li>
                <li>
                  <a href="component-media-object.html">
                    <i className="bx bx-right-arrow-alt"></i>Media Objects
                  </a>
                </li>
                <li>
                  <a href="component-modals.html">
                    <i className="bx bx-right-arrow-alt"></i>Modals
                  </a>
                </li>
                <li>
                  <a href="component-navs-tabs.html">
                    <i className="bx bx-right-arrow-alt"></i>Navs & Tabs
                  </a>
                </li>
                <li>
                  <a href="component-navbar.html">
                    <i className="bx bx-right-arrow-alt"></i>Navbar
                  </a>
                </li>
                <li>
                  <a href="component-paginations.html">
                    <i className="bx bx-right-arrow-alt"></i>Pagination
                  </a>
                </li>
                <li>
                  <a href="component-popovers-tooltips.html">
                    <i className="bx bx-right-arrow-alt"></i>Popovers & Tooltips
                  </a>
                </li>
                <li>
                  <a href="component-progress-bars.html">
                    <i className="bx bx-right-arrow-alt"></i>Progress
                  </a>
                </li>
                <li>
                  <a href="component-spinners.html">
                    <i className="bx bx-right-arrow-alt"></i>Spinners
                  </a>
                </li>
                <li>
                  <a href="component-notifications.html">
                    <i className="bx bx-right-arrow-alt"></i>Notifications
                  </a>
                </li>
                <li>
                  <a href="component-avtars-chips.html">
                    <i className="bx bx-right-arrow-alt"></i>Avatrs & Chips
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-command"></i>
                </div>
                <div className="menu-title">Content</div>
              </a>
              <ul>
                <li>
                  <a href="content-grid-system.html">
                    <i className="bx bx-right-arrow-alt"></i>Grid System
                  </a>
                </li>
                <li>
                  <a href="content-typography.html">
                    <i className="bx bx-right-arrow-alt"></i>Typography
                  </a>
                </li>
                <li>
                  <a href="content-text-utilities.html">
                    <i className="bx bx-right-arrow-alt"></i>Text Utilities
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-atom"></i>
                </div>
                <div className="menu-title">Icons</div>
              </a>
              <ul>
                <li>
                  <a href="icons-line-icons.html">
                    <i className="bx bx-right-arrow-alt"></i>Line Icons
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i className="bx bx-right-arrow-alt"></i>Boxicons
                  </a>
                </li>
                <li>
                  <a href="icons-feather-icons.html">
                    <i className="bx bx-right-arrow-alt"></i>Feather Icons
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Forms & Tables</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-hourglass"></i>
                </div>
                <div className="menu-title">Forms</div>
              </a>
              <ul>
                <li>
                  <a href="form-elements.html">
                    <i className="bx bx-right-arrow-alt"></i>Form Elements
                  </a>
                </li>
                <li>
                  <a href="form-input-group.html">
                    <i className="bx bx-right-arrow-alt"></i>Input Groups
                  </a>
                </li>
                <li>
                  <a href="form-layouts.html">
                    <i className="bx bx-right-arrow-alt"></i>Forms Layouts
                  </a>
                </li>
                <li>
                  <a href="form-validations.html">
                    <i className="bx bx-right-arrow-alt"></i>Form Validation
                  </a>
                </li>
                <li>
                  <a href="form-wizard.html">
                    <i className="bx bx-right-arrow-alt"></i>Form Wizard
                  </a>
                </li>
                <li>
                  <a href="form-text-editor.html">
                    <i className="bx bx-right-arrow-alt"></i>Text Editor
                  </a>
                </li>
                <li>
                  <a href="form-file-upload.html">
                    <i className="bx bx-right-arrow-alt"></i>File Upload
                  </a>
                </li>
                <li>
                  <a href="form-date-time-pickes.html">
                    <i className="bx bx-right-arrow-alt"></i>Date Pickers
                  </a>
                </li>
                <li>
                  <a href="form-select2.html">
                    <i className="bx bx-right-arrow-alt"></i>Select2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-grid-alt"></i>
                </div>
                <div className="menu-title">Tables</div>
              </a>
              <ul>
                <li>
                  <a href="table-basic-table.html">
                    <i className="bx bx-right-arrow-alt"></i>Basic Table
                  </a>
                </li>
                <li>
                  <a href="table-datatable.html">
                    <i className="bx bx-right-arrow-alt"></i>Data Table
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Pages</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-lock-open-alt"></i>
                </div>
                <div className="menu-title">Authentication</div>
              </a>
              <ul>
                <li>
                  <a href="authentication-signin.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Sign In
                  </a>
                </li>
                <li>
                  <a href="authentication-signup.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="authentication-signin-with-header-footer.html"
                    target="_blank"
                  >
                    <i className="bx bx-right-arrow-alt"></i>Sign In with Header
                    & Footer
                  </a>
                </li>
                <li>
                  <a
                    href="authentication-signup-with-header-footer.html"
                    target="_blank"
                  >
                    <i className="bx bx-right-arrow-alt"></i>Sign Up with Header
                    & Footer
                  </a>
                </li>
                <li>
                  <a href="authentication-forgot-password.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Forgot Password
                  </a>
                </li>
                <li>
                  <a href="authentication-reset-password.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Reset Password
                  </a>
                </li>
                <li>
                  <a href="authentication-lock-screen.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Lock Screen
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="user-profile.html">
                <div className="parent-icon">
                  <i className="bx bx-user-pin"></i>
                </div>
                <div className="menu-title">User Profile</div>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <div className="parent-icon">
                  <i className="bx bx-video-recording"></i>
                </div>
                <div className="menu-title">Timeline</div>
              </a>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-error"></i>
                </div>
                <div className="menu-title">Errors</div>
              </a>
              <ul>
                <li>
                  <a href="errors-404-error.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>404 Error
                  </a>
                </li>
                <li>
                  <a href="errors-500-error.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>500 Error
                  </a>
                </li>
                <li>
                  <a href="errors-coming-soon.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Coming Soon
                  </a>
                </li>
                <li>
                  <a href="error-blank-page.html" target="_blank">
                    <i className="bx bx-right-arrow-alt"></i>Blank Page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">
                <div className="parent-icon">
                  <i className="bx bx-help-circle"></i>
                </div>
                <div className="menu-title">FAQ</div>
              </a>
            </li>
            <li>
              <a href="pricing-table.html">
                <div className="parent-icon">
                  <i className="bx bx-dollar-circle"></i>
                </div>
                <div className="menu-title">Pricing</div>
              </a>
            </li>
            <li className="menu-label">Charts & Maps</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-line-chart"></i>
                </div>
                <div className="menu-title">Charts</div>
              </a>
              <ul>
                <li>
                  <a href="charts-apex-chart.html">
                    <i className="bx bx-right-arrow-alt"></i>Apex
                  </a>
                </li>
                <li>
                  <a href="charts-chartjs.html">
                    <i className="bx bx-right-arrow-alt"></i>Chartjs
                  </a>
                </li>
                <li>
                  <a href="charts-highcharts.html">
                    <i className="bx bx-right-arrow-alt"></i>Highcharts
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-map-pin"></i>
                </div>
                <div className="menu-title">Maps</div>
              </a>
              <ul>
                <li>
                  <a href="map-google-maps.html">
                    <i className="bx bx-right-arrow-alt"></i>Google Maps
                  </a>
                </li>
                <li>
                  <a href="map-vector-maps.html">
                    <i className="bx bx-right-arrow-alt"></i>Vector Maps
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Others</li>
            <li>
              <a className="has-arrow" href="javascript:;">
                <div className="parent-icon">
                  <i className="bx bx-menu"></i>
                </div>
                <div className="menu-title">Menu Levels</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="javascript:;">
                    <i className="bx bx-right-arrow-alt"></i>Level One
                  </a>
                  <ul>
                    <li>
                      <a className="has-arrow" href="javascript:;">
                        <i className="bx bx-right-arrow-alt"></i>Level Two
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <i className="bx bx-right-arrow-alt"></i>Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://codervent.com/synadmin/documentation/index.html"
                target="_blank"
              >
                <div className="parent-icon">
                  <i className="bx bx-file"></i>
                </div>
                <div className="menu-title">Documentation</div>
              </a>
            </li>
            <li>
              <a href="https://themeforest.net/user/codervent" target="_blank">
                <div className="parent-icon">
                  <i className="bx bx-headphone"></i>
                </div>
                <div className="menu-title">Support</div>
              </a>
            </li>
          </ul>
        </div>

        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand">
              <div className="mobile-toggle-menu">
                <i className="bx bx-menu"></i>
              </div>
              <div className="top-menu-left d-none d-lg-block">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="app-emailbox.html">
                      <i className="bx bx-envelope"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-chat-box.html">
                      <i className="bx bx-message"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-fullcalender.html">
                      <i className="bx bx-calendar"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-to-do.html">
                      <i className="bx bx-check-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="search-bar flex-grow-1">
                <div className="position-relative search-bar-box">
                  <input
                    type="text"
                    className="form-control search-control"
                    placeholder="Type to search..."
                  />{' '}
                  <span className="position-absolute top-50 search-show translate-middle-y">
                    <i className="bx bx-search"></i>
                  </span>
                  <span className="position-absolute top-50 search-close translate-middle-y">
                    <i className="bx bx-x"></i>
                  </span>
                </div>
              </div>
              <div className="top-menu ms-auto">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item mobile-search-icon">
                    <a className="nav-link" href="#">
                      {' '}
                      <i className="bx bx-search"></i>{' '}
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {' '}
                      <i className="bx bx-category"></i>{' '}
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="row row-cols-3 g-3 p-3">
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-cosmic text-white">
                            <i className="bx bx-group"></i>
                          </div>
                          <div className="app-title">Teams</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-burning text-white">
                            <i className="bx bx-atom"></i>
                          </div>
                          <div className="app-title">Projects</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-lush text-white">
                            <i className="bx bx-shield"></i>
                          </div>
                          <div className="app-title">Tasks</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-kyoto text-dark">
                            <i className="bx bx-notification"></i>
                          </div>
                          <div className="app-title">Feeds</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-blues text-dark">
                            <i className="bx bx-file"></i>
                          </div>
                          <div className="app-title">Files</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-moonlit text-white">
                            <i className="bx bx-filter-alt"></i>
                          </div>
                          <div className="app-title">Alerts</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="alert-count">7</span>
                      <i className="bx bx-bell"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="msg-header">
                          <p className="msg-header-title">Notifications</p>
                          <p className="msg-header-clear ms-auto">
                            Marks all as read
                          </p>
                        </div>
                      </a>
                      <div className="header-notifications-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary text-primary">
                              <i className="bx bx-group"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Customers
                                <span className="msg-time float-end">
                                  14 Sec ago
                                </span>
                              </h6>
                              <p className="msg-info">5 new user registered</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              <i className="bx bx-cart-alt"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Orders{' '}
                                <span className="msg-time float-end">
                                  2 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                You have recived new orders
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-file"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                24 PDF File
                                <span className="msg-time float-end">
                                  19 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The pdf files generated
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-warning text-warning">
                              <i className="bx bx-send"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Time Response{' '}
                                <span className="msg-time float-end">
                                  28 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                5.1 min avarage time response
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-info text-info">
                              <i className="bx bx-home-circle"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Product Approved{' '}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Your new product has approved
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              <i className="bx bx-message-detail"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Comments{' '}
                                <span className="msg-time float-end">
                                  4 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                New customer comments recived
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-check-square"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Your item is shipped{' '}
                                <span className="msg-time float-end">
                                  5 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Successfully shipped your item
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary text-primary">
                              <i className="bx bx-user-pin"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New 24 authors
                                <span className="msg-time float-end">
                                  1 day ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                24 new authors joined last week
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-warning text-warning">
                              <i className="bx bx-door-open"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Defense Alerts{' '}
                                <span className="msg-time float-end">
                                  2 weeks ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                45% less alerts last 4 weeks
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center msg-footer">
                          View All Notifications
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="alert-count">8</span>
                      <i className="bx bx-comment"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="msg-header">
                          <p className="msg-header-title">Messages</p>
                          <p className="msg-header-clear ms-auto">
                            Marks all as read
                          </p>
                        </div>
                      </a>
                      <div className="header-message-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-1.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Daisy Anderson{' '}
                                <span className="msg-time float-end">
                                  5 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The standard chunk of lorem
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-2.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Althea Cabardo{' '}
                                <span className="msg-time float-end">
                                  14 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Many desktop publishing packages
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-3.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Oscar Garner{' '}
                                <span className="msg-time float-end">
                                  8 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Various versions have evolved over
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-4.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Katherine Pechon{' '}
                                <span className="msg-time float-end">
                                  15 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Making this the first true generator
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-5.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Amelia Doe{' '}
                                <span className="msg-time float-end">
                                  22 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Duis aute irure dolor in reprehenderit
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-6.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Cristina Jhons{' '}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The passage is attributed to an unknown
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-7.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                James Caviness{' '}
                                <span className="msg-time float-end">
                                  4 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The point of using Lorem
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-8.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Peter Costanzo{' '}
                                <span className="msg-time float-end">
                                  6 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                It was popularised in the 1960s
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-9.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                David Buckley{' '}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Various versions have evolved over
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-10.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Thomas Wheeler{' '}
                                <span className="msg-time float-end">
                                  2 days ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                If you are going to use a passage
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-11.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Johnny Seitz{' '}
                                <span className="msg-time float-end">
                                  5 days ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                All the Lorem Ipsum generators
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center msg-footer">
                          View All Messages
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="user-box dropdown">
                <a
                  className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/images/avatars/avatar-2.png"
                    className="user-img"
                    alt="user avatar"
                  />
                  <div className="user-info ps-3">
                    <p className="user-name mb-0">Pauline Seitz</p>
                    <p className="designattion mb-0">Web Designer</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-cog"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-home-circle"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-dollar-circle"></i>
                      <span>Earnings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-download"></i>
                      <span>Downloads</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider mb-0"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-log-out-circle"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="page-wrapper">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="overlay toggle-icon"></div>

      {/* <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt"></i></a> */}

      <footer className="page-footer">
        <p className="mb-0">Copyright © 2021. All right reserved.</p>
      </footer>

      <div className="switcher-wrapper">
        <div className="switcher-btn">
          <i className="bx bx-cog bx-spin"></i>
        </div>
        <div className="switcher-body">
          <div className="d-flex align-items-center">
            <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
            <button
              type="button"
              className="btn-close ms-auto close-switcher"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <h6 className="mb-0">Theme Styles</h6>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="lightmode"
                checked
              />
              <label className="form-check-label" for="lightmode">
                Light
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="darkmode"
              />
              <label className="form-check-label" for="darkmode">
                Dark
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="semidark"
              />
              <label className="form-check-label" for="semidark">
                Semi Dark
              </label>
            </div>
          </div>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="minimaltheme"
              name="flexRadioDefault"
            />
            <label className="form-check-label" for="minimaltheme">
              Minimal Theme
            </label>
          </div>
          <hr />
          <h6 className="mb-0">Header Colors</h6>
          <hr />
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div className="indigator headercolor1" id="headercolor1"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor2" id="headercolor2"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor3" id="headercolor3"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor4" id="headercolor4"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor5" id="headercolor5"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor6" id="headercolor6"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor7" id="headercolor7"></div>
              </div>
              <div className="col">
                <div className="indigator headercolor8" id="headercolor8"></div>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="mb-0">Sidebar Backgrounds</h6>
          <hr />
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div
                  className="indigator sidebarcolor1"
                  id="sidebarcolor1"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor2"
                  id="sidebarcolor2"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor3"
                  id="sidebarcolor3"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor4"
                  id="sidebarcolor4"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor5"
                  id="sidebarcolor5"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor6"
                  id="sidebarcolor6"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor7"
                  id="sidebarcolor7"
                ></div>
              </div>
              <div className="col">
                <div
                  className="indigator sidebarcolor8"
                  id="sidebarcolor8"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
