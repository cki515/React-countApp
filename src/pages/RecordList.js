import { Button, Chip } from "@mui/material";

function RecordListItem({ no, record, optionDrawer }) {
  return (
    <li className="mt-6 sm:mt-8">
      <div className="flex gap-2">
        <Chip label={`Round ${no}`} className="" variant="outlined" />
        <Chip
          label={`Date : ${record.regDate}`}
          className=""
          variant="outlined"
          color="primary"
        />
      </div>
      <div className="flex mt-2 sm:mt-4 shadow rounded-[20px]">
        <div className="px-5 hover:text-[color:var(--mui-color-primary-main)] flex-grow flex items-center whitespace-pre-wrap leading-relaxed my-5">
          {record.count > 1 ? record.count + " times" : record.count + " time"}
        </div>
        <div>
          <Button
            onClick={() => optionDrawer(no)}
            className="flex-shrink-0 !pt-2 self-start !rounded-r-[20px]"
          >
            <span className="text-[#dcdcdc] text-2xl h-[80px]">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RecordListItem;
