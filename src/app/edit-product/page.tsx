import InputField from "@/components/CommonComponents/InputField";
import React from "react";
import styles from "./editproduct.module.scss";

function page() {
  const formFields = [
    {
      id: 1,
      name: "ID",
      icon: "",
      placeholder: "Enter Product ID",
      secret: false,
      defaultValue: "",
      type: "text",
    },
    {
      id: 2,
      name: "Product Name",
      icon: "",
      placeholder: "Enter Product Name",
      secret: true,
      defaultValue: "",
      type: "text",
    },
    {
      id: 3,
      name: "Category",
      icon: "",
      placeholder: "Product Category",
      secret: false,
      defaultValue: "",
      type: "text",
    },
    {
      id: 4,
      name: "Price",
      icon: "",
      placeholder: "Enter Product Price",
      secret: true,
      defaultValue: "",
      type: "text",
    },
    {
      id: 5,
      name: "Description",
      icon: "",
      placeholder: "Enter Product Description",
      secret: false,
      defaultValue: "",
      type: "text",
    },
  ];

  return (
    <div className="w-full h-full p-3">
      <span className="text-2xl">Edit Product</span>
      <div className="wrapper mt-7 p-3">
        <div className={styles.form}>
          {formFields.slice(0, 1).map((el) => {
            return (
              <div key={el.id} className={styles.form_fields}>
                <span>{el.name}</span>
                <InputField secret={el.secret} />
              </div>
            );
          })}
          <div className="flex items-center gap-3">
            <input type="file" id="product_img" className="hidden" />
            <div className="h-[100px] w-[100px] rounded-[8px] bg-[#e2e2ea]" />
            <div className="flex flex-col gap-2">
              <span>Select your product picture</span>
              <label htmlFor="product_img" className="btn w-[130px]">
                Browse
              </label>
            </div>
          </div>
          {formFields.slice(1).map((el) => {
            return (
              <div key={el.id} className={styles.form_fields}>
                <span>{el.name}</span>
                <InputField
                  height={el.name === "Description" ? "170px" : "50px"}
                  secret={el.secret}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
