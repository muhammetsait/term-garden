A hypervisor, also known as a virtual machine motor or virtualizer, is computer software, firmware, or hardware that creates and runs virtual machines. A host machine is the computer the hypervisor is running the virtual machines on. Each virtual machine is called a guest machine. A hypervisor allows one host computer to support many guest machines by virtually sharing resources such as memory, CPU, and storage.

Multiple operations systems can run alongside each other and share the same virtualized resources with a hypervisor. Since the guest machines are independent of the host, a system’s available resources are better used and IT mobility is improved, making moves between different servers easier. A hypervisor reduces space, energy used, and the maintenance typically required.

Types of hypervisors
There are two types of hypervisors:

Type 1
Also referred to as bare metal hypervisor, a Type 1 hypervisor acts as a lightweight operating system and runs directly on the host’s hardware to manage guest operating systems. It takes the place of the host operating system, and resources are scheduled directly to the hardware.

These hypervisors are extremely secure because they are isolated from the attack-prone operating system. They perform better, are generally more efficient, and are common among enterprise data centers.

Examples of Type 1 hypervisors incluse VMware ESXi, Microsoft Hyper-V, and KVM.

Type 2
Also referred to as a hosted hypervisor, a Type 2 hypervisor runs as a software layer or application on a conventional operating system. It extracts guests operating systems from the host operating system. Resources are scheduled against the host, which is executed against the hardware.

Type 2 hypervisors have a higher latency than Type 1s because communication between the hardware and hypervisor must pass through an extra layer of the operating system. For this reason, Type 2 hypervisors are better for individual users who want to run multiple operating systems on a personal computer, because higher latency is less of a concern.

Examples of type 2 hypervisors include VMware Workstation, Oracle VirtualBox, and Parallels Desktop for Mac.

