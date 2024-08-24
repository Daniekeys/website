import {SetStateAction, useState} from 'react'
import UrlInput from '../Input';
import { useLocation, useNavigate } from 'react-router-dom';
import { OutlineBtn, BigButton } from '../Button';

const LocationSettings = ({ setCurrent, handleCreate,loading, redirectUrl, setRedirectUrl }: any) => {
    const [url, setUrl] = useState('');
  const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const _type = queryParams.get("type"); 

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-black text-base lg:text-xl font-bold red-hat">
        Live Class Information
      </h1>
      {/* <div className="w-full flex mt-4">
        <UrlInput
          label={"Location (Add meeting link here)"}
          placeholder="www.meet.google.com"
          value={url}
        
          className="w-full"
          onChange={(e: any) => setUrl(e.target?.value)}
        />
      </div> */}
      <div className="w-full flex flex-col mt-10">
        <h1 className="text-sm font-semibold text-black red-hat lg:text-base ">
          Settings
        </h1>
        <div className="flex flex-col gap-4">
          {/* start */}
          <div className="w-full flex items-center gap-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[14px] h-[14px] rounded-sm  "
            />
            <p className="inter font-medium text-md ">
              Hide from your profile page
            </p>
          </div>
          {/* ednd */}
          <div className="w-full flex items-center gap-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[14px] h-[14px] rounded-sm  "
            />
            <p className="inter font-medium text-md ">Close registration</p>
          </div>
          {/* ednd */}
          <div className="w-full flex items-center gap-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[14px] h-[14px] rounded-sm  "
            />
            <p className="inter font-medium text-md ">
              Redirects customers to URL after purchase
            </p>
          </div>
          {/* ednd */}
        </div>
        <p className="mt-4 text-xs text-black">
          *This could be a link to a whatsapp group chat, telegram group etc.
        </p>

        <div className="w-full flex mt-4">
          <UrlInput
            label={"Redirect Url"}
            placeholder="www.meet.google.com"
            value={redirectUrl}
          
            className="w-full"
            onChange={(e: any) => setRedirectUrl(e.target?.value)}
          />
        </div>
      </div>
      <div className="flex gap-3 items-center mt-8 justify-end">
        <span>
          <OutlineBtn name="Back" onClick={() => {
            if (_type === "ONE_MONTHLY") {
              setCurrent(1)
            }
            else {

              setCurrent(2)
            }
          }} />
        </span>
        <span>
          <BigButton
            name={"Continue"}

            // loading={loading}

            onClick={handleCreate}
          />
        </span>
      </div>
    </div>
  );
}

export default LocationSettings
