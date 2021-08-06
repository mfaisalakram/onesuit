import React, { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileSettings = ({ account }) => {
  const [profileData, setProfileData] = useState({
    firstName: account?.firstName,
    lastName: account?.lastName,
    fullName: account?.firstName,
    email: account?.email,
    address: account?.token,
  });

  // let { firstName, lastName, fullName, email, address } = profileData;

  // custom functions
  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    fullName: Yup.string().required("fullName is required"),
    email: Yup.string().required("email is required"),
    address: Yup.string().required("address is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const ProfileSubmithandler = async (data) => {
    console.log(data);
    const isValid = await validationSchema.isValid(data);

    console.log(isValid);
    console.log(errors);
  };

  useEffect(() => {
    setProfileData(account);
  }, [account]);
  return (
    <div className="card">
      <div className="card-body">
        <form
          action=""
          onSubmit={handleSubmit((data) => ProfileSubmithandler(data))}
        >
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">First Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={(e) => onChange(e)}
                //value={profileData?.firstName}
                autoComplete="off"
                  {...register('firstName')}
              />
            </div>
            <div>
              <p style={{ color: "red" }}>{errors.firstName?.message}</p>
              <p style={{ color: "red" }}>{errors.lastName?.message}</p>
              <p style={{ color: "red" }}>{errors.email?.message}</p>
              <p style={{ color: "red" }}>{errors.fullName?.message}</p>
              <p style={{ color: "red" }}>{errors.address?.message}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Last Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                name="lastName"
                className="form-control"
                onChange={(e) => onChange(e)}
                // value={lastName}
                autoComplete="off"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                onChange={(e) => onChange(e)}
                name="fullName"
                {...register("fullName")}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                onChange={(e) => onChange(e)}
                // value={email}
                autoComplete="off"
                name="email"
                {...register("email")}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                // value={address}
                onChange={(e) => onChange(e)}
                name="address"
                {...register("address")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 text-secondary">
              <button type="submit" className="btn btn-primary px-4">
                Save Changes{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
