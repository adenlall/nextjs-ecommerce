import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
      {...props}
    >
      <g paintOrder="stroke fill markers">
        <rect
          width={507.96939}
          height={506.71481}
          x={3.0962198}
          y={4.0478101}
          rx={64.342094}
          ry={60.080776}
          fill="olive"
        />
        <path
          d="M381.152 213.805c-.795-286.846-506.53 209.916-219.684 209.12C448.314 422.13-60.168-71.82-59.372 215.026c.795 286.847 506.53-209.916 219.684-209.12-286.847.795 221.636 494.745 220.84 207.899z"
          transform="matrix(.75929 0 0 .75929 134.92 94.602)"
          fill="#ff0"
        />
        <path
          d="M381.152 213.805c-.795-286.846-506.53 209.916-219.684 209.12C448.314 422.13-60.168-71.82-59.372 215.026c.795 286.847 506.53-209.916 219.684-209.12-286.847.795 221.636 494.745 220.84 207.899z"
          transform="matrix(.75929 0 0 .75929 133.839 93.197)"
          fill="#ff0"
        />
      </g>
    </svg>
  );
}
