import { Language } from "@mui/icons-material";
import { Radio } from "@mui/material";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";

const Appearance = () => {
  const [theme, setTheme] = useState("light");
  const [customColor, setCustomColor] = useState("#ffffff");

  return (
    <div className="row y-gap-20 bg-white px-10 py-10 rounded-8">
      <div className="col-12">
        <div className="text-20 fw-600 lh-14 d-flex items-center gap-2">
          <PaletteIcon size={18} /> Theme & Appearance
        </div>
        <div className="text-14 text-light-1">
          Customize the look and feel of your platform
        </div>
      </div>

      <div className="col-12">
        <div className="text-14 lh-14 fw-500">Color Theme</div>
        <div className="row x-gap-10 y-gap-10 items-center mt-10">
          <div
            className="col-4 d-flex flex-column items-center cursor-pointer"
            onClick={() => setTheme("light")}
          >
            <div className="border-dark-blue w-100 text-center text-16 fw-500 rounded-8 bg-white py-30">
              Light
            </div>
            <div className="d-flex items-center justify-center">
              <Radio checked={theme === "light"} />
              <div className="text-14 fw-500 ml-10">Light</div>
            </div>
          </div>

          <div
            className="col-4 d-flex flex-column items-center cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <div className="border-dark-1 w-100 text-center text-16 text-white fw-500 rounded-8 bg-dark-1 py-30">
              Dark
            </div>
            <div className="d-flex items-center justify-center">
              <Radio checked={theme === "dark"} />
              <div className="text-14 fw-500 ml-10">Dark</div>
            </div>
          </div>

          <div
            className="col-4 d-flex flex-column items-center cursor-pointer"
            onClick={() => setTheme("system")}
          >
            <div
              className="w-100 text-center text-16 fw-500 rounded-8 py-30"
              style={{
                background: "linear-gradient(to right, white, black)",
              }}
            >
              System
            </div>
            <div className="d-flex items-center justify-center">
              <Radio checked={theme === "system"} />
              <div className="text-14 fw-500 ml-10">System</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="text-14 lh-14 fw-500">Primary Color</div>
        <div className="row x-gap-10 y-gap-10 items-center mt-5">
          {[
            "#0853B2",
            "#2563EB",
            "#16A34A",
            "#9333EA",
            "#DC2626",
            "#EA580C",
          ].map((color, index) => (
            <div className="col-2" key={index}>
              <div
                className="h-40 rounded-8"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12">
        <div className="text-14 lh-14 fw-500">Custom Color</div>
        <div className="d-flex items-center mt-5 gap-2">
          <input
            type="text"
            className="border-light rounded-8 w-full px-10 h-40"
            onChange={(e) => setCustomColor(e.target.value)}
          />
          <div
            className="size-40 rounded-8 border-light"
            style={{ backgroundColor: customColor }}
          ></div>
        </div>
      </div>

      <div className="col-12">
        <div className="text-14 lh-14 fw-500">Logo</div>
        <div className="d-flex items-center mt-5 gap-2">
          <div className="size-50 flex-center rounded-8 border-light">
            <Language />
          </div>
          <button className="border-light rounded-8 px-15 h-40">
            Upload New Logo
          </button>
        </div>
      </div>

      <div className="col-12">
        <div className="text-14 lh-14 fw-500">Favicon</div>
        <div className="d-flex items-center mt-5 gap-2">
          <div className="size-50 flex-center rounded-8 border-light">
            <Language className="text-14" />
          </div>
          <button className="border-light rounded-8 px-15 h-40">
            Upload New Favicon
          </button>
        </div>
      </div>

      <div className="col-12 mt-5 d-flex justify-end border-top-light">
        <button className="bg-dark-blue text-white rounded-8 text-14 py-5 px-15 w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Appearance;
