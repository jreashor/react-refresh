export default function Button({mode = 'filled', children, Icon, ...props}) {
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
 const buttonClasses = [
     'button',
     `${mode}-button`
 ];
 
 return (
     <button className={buttonClasses} {...props}>
        
        {Icon &&
            <span className={'button-icon'}><Icon className={'button-icon'} /></span>
            
        }
        <span>{children}</span>
     </button>
 );
}
