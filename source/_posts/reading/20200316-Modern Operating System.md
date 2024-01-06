---
title: 现代操作系统
date: 2020-03-16 17:42:13
updated: 2021-03-21 00:21:17
author: Forrest
tags: 阅读
categories:
---

## 1 INTRODUCTION

operating system
shell
GUI (Graphical User Interface)
Most computers have two modes of operation: kernel mode and user mode.

### 1.1 WHAT IS AN OPERATING SYSTEM?

**1.1.1 The Operating System as an Extended Machine**

**architecture** is primitive and awkward to program.

**SATA** (Serial ATA) hard disks

- at the hardware level

- **disk driver** provides an interface

- **files** that programs can create, write, and read them

**1.1.2 The Operating System as a Resource Manager**

manage the pieces of a complex system. provide for an orderly and controlled allocation of the processors, memories, and I/O devices.

**multiplexing** (sharing) resources in two different ways, in time and in space.

### 1.2 HISTORY OF OPERATING SYSTEMS

**1.2.1 The First Generation (1945–55): Vacuum Tubes**

**1.2.2 The Second Generation (1955–65): Transistors and Batch Systems**

**1.2.3 The Third Generation (1965–1980): ICs and Multiprogramming**

**1.2.4 The Fourth Generation (1980–Present): Personal Computers**

**1.2.5 The Fifth Generation (1990–Present): Mobile Computers**

### 1.3 COMPUTER HARDWARE REVIEW

The CPU, memory, and I/O devices are all connected by a system bus and communicate with one another over it.

**1.3.1 Processors**

special registers

- **program counter** contains the memory address of the next instruction to be fetched.

- **stack pointer** points to the top of the current stack in memory.

- **PSW (Program Status Word)** contains the condition code bits, the CPU priority, the mode, and various other control bits.

**pipeline**. a CPU might have separate fetch, decode, and execute units, so that while it is executing instruction n, it could also be decoding instruction n + 1 and fetching instruction n + 2.

**superscalar CPU**. one for integer arithmetic, one for floating-point arithmetic, and one for Boolean operations. Two or more instructions are fetched at once, decoded, and dumped into a holding buffer until they can be executed.

**system call** traps into the kernel and invokes the operating system.

**Multithreaded and Multicore Chips**

**multithreading** is allow the CPU to hold the state of two different threads and then switch back and forth on a nanosecond time scale.

**GPU (Graphics Processing Unit)** is a processor with thousands of tiny cores. Good for many small computations done in parallel. Not so good at serial tasks.

**1.3.2 Memory**

volatile

SRAM (Static Random Access Memory)
DRAM (Dynamic Random Access Memory)
CMOS

non-volatile

ROM (Read Only Memory)
EEPROM (Electrically Erasable PROM)
flash memory

**1.3.3 Disks**

slower, mechanical device

- moving the arm to a **cylinder**

- on the correct **track**, wait for the needed **sector** to rotate under the head

- reading or writing

**SSDs (Solid State Disks)** do not have moving parts, do not contain platters in the shape of disks, and store data in (Flash) memory.

**virtual memory** makes it possible to run programs larger than physical memory by placing them on the disk and using main memory as a kind of cache for the most heavily executed parts. This mapping is done by a part of the CPU called the **MMU (Memory Management Unit)**.

**context switch**, it may be necessary to flush all modified blocks from the cache and change the mapping registers in the MMU.

**1.3.4 I/O Devices**

I/O devices: a controller and the device itself.

controller presents a simpler (still very complex) interface to the operating system.

Devices have simple interfaces, both because they cannot do much and to make them standard.

**SATA** stands for **Serial ATA** and **ATA** in turn stands for **AT Attachment**.

**device driver** talks to different controllers, giving them commands and accepting responses.

Every controller has registers that are used to communicate with it, they forms the **I/O port space**.

I/O in three ways

- **busy waiting**, issue a system call, CPU polls the device until finished.

- driver starts the device and asks it to give an **interrupt** when finished. Once interrupt, PC and PSW are pushed onto stack and CPU switched into kernel mode. **interrupt vector**, the address of the interrupt handler.

- **DMA (Direct Memory Access)** chip, control the flow of bits between memory and some controller without constant CPU intervention.

Interrupts can (and often do) happen at highly inconvenient moments, for example, while another interrupt handler is running. For this reason, the CPU has a way to disable interrupts and then reenable them later. While interrupts are disabled, any devices that finish continue to assert their interrupt signals, but the CPU is not interrupted until interrupts are enabled again. If multiple devices finish while interrupts are disabled, the interrupt controller decides which one to let through first, usually based on static priorities assigned to each device. The highest-priority device wins and gets to be serviced first. The others must wait.

**1.3.5 Buses**

This system has many buses (e.g., cache, memory, PCIe, PCI, USB, SATA, and DMI), each with a different transfer rate and function.

- the **PCIe (Peripheral Component Interconnect Express)** bus, as a successor to the **PCI** bus, which was a replacement for the **ISA (Industry Standard Architecture)** bus. A **shared bus architecture** means that multiple devices use the same wires to transfer data. A **parallel bus architecture** as used in PCI means that you send each word of data over multiple wires. PCIe uses a **serial bus architecture** and sends all bits in a message through a single connection.

- The **USB (Universal Serial Bus)** was invented to attach all the slow I/O devices to the computer. Any USB device can be connected to a computer and it will function immediately, without requiring a reboot.

- The **SCSI (Small Computer System Interface)** bus is a high-performance bus mainly using in servers and workstations.

the CPU talks to memory over a fast DDR3 bus, to an external graphics device over PCIe and to all other devices via a hub over a **DMI (Direct Media Interface)** bus. The hub in turn connects all the other devices, using the USB to talk to USB devices, the SATA bus to interact with hard disks and DVD drives, and PCIe to transfer Ethernet frames. We have already mentioned the older PCI devices that use a traditional PCI bus.

the operating system has to know what peripheral devices are connected to the computer and configure them. What **plug and play** does is have the system automatically collect information about the I/O devices, centrally assign interrupt levels and I/O addresses, and then tell each card what its numbers are.

**1.3.6 Booting the Computer**

When the computer is booted

- the **BIOS (Basic Input Output System)** checks how much RAM is installed and wether the basic devices are installed and responding. scan the PCIe and PCI buses to detect all the devices. If the devices are different from when the system was last booted, the new devices are configured.

- The BIOS then determines the boot device by trying a list of devices stored in the CMOS memory. if booting from the hard disk, the first sector from the boot device is read into memory and executed. This sector contains a program that examines the partition table to determine which partition is active. Then a boot loader is read in from that partition. This loader reads in the operating system from the active partition and starts it.

- The operating system then queries the BIOS to get the configuration information. For each device, it checks if it has the device driver. If not, it asks the user to insert a CD-ROM containing the driver or to download it from the Internet. Once it has all the device drivers, the operating system loads them into the kernel. Then it initializes its tables, creates whatever background processes are needed, and starts up a login program or GUI.

### 1.4 THE OPERATING SYSTEM ZOO

**1.4.1 Mainframe Operating Systems**

differ from personal computers in terms of their I/O capacity, and they are oriented toward processing many jobs at once.

They typically offer three kinds of services:

- batch system processes jobs without interactive user.

- Transaction-processing systems handle large numbers of small requests.

- Timesharing systems allow multiple remote users to run jobs on the computer at once.

**1.4.2 Server Operating Systems**

serve multiple users at once over a network and allow the users to share hardware and software resources. Servers can provide print service, file service, or Web service.

**1.4.3 Multiprocessor Operating Systems**

connect multiple CPUs into a single system. Depending on how they are connected and what is shared, these systems are called parallel computers, multicomputers, or multiprocessors.

**1.4.4 Personal Computer Operating Systems**

support multiprogramming, often with dozens of programs started up at boot time.

**1.4.5 Handheld Computer Operating Systems**

can be held in hand during operation.

**1.4.6 Embedded Operating Systems**

do not accept user-installed software, all the software is in ROM.

such as microwave ovens, TV sets, cars, DVD recorders, traditional phones, and MP3 players.

**1.4.7 Sensor-Node Operating Systems**

**1.4.8 Real-Time Operating Systems**

**1.4.9 Smart Card Operating Systems**

### 1.5 OPERATING SYSTEM CONCEPTS

**1.5.1 Processes**

a program in execution. a container that holds all the information needed to run a program. associate with **address space** and a set of resources.

all the information about each process, other than the contents of its own address space, is stored in the **process table**.

Thus, a (suspended) process consists of its address space, usually called the **core image**, and its process table entry, which contains the contents of its registers and many other items needed to restart the process later.

A process can create one or more **child processes**. Processes that are cooperating to get job done need **interprocess communication** to communicate with one another and synchronize activities.

The **alarm signal** causes the process to temporarily suspend whatever it was doing, save its registers on the stack, and start running a special signal-handling procedure.

Each person authorized to use a system is assigned a **UID**. Every process started has the UID of the person who started it. A child process has the same UID as its parent. Users can be members of groups, each of which has a **GID**.

**1.5.2 Address Spaces**

main memory uses to hold executing programs. To keep multiple programs in memory at the same time from interfering with one another, protection mechanism is needed.

memory-related issue

- managing and protecting the main memory.

- managing the address space of the processes.

virtual memory keeps part of the address space in main memory and part on disk and shuttles pieces back and forth between them as needed. The address space is decoupled from the machine’s physical memory and may be either larger or smaller than the physical memory.

**1.5.3 Files**

a **directory** as a way of grouping files together.

the file system: create and remove directories, put an existing file in a directory and remove a file from a directory, directory entries may be either files or other directories.

Compared with process hierarchies: deeper, long-lived, can be read by a wider group.

Every file can be specified by giving its **path name** from the **root directory**. Each process has a current **working directory**, in which path names not beginning with a slash are looked for.

If the file access is permitted, the system returns a **file descriptor**. If not, an error code is returned.

the mounted file system: the file system that cannot be used on the CD-ROM must be attached to the **root file system**, because UNIX does not allow path names to be prefixed by a drive name or number.

**Special files** are provided in order to make I/O devices look like files.

- **block special files** are used to model devices that consist of randomly addressable blocks.

- **character special files** are used to model devices that accept or output a character stream.

A **pipe** is a sort of pseudo file that can be used to connect two processes. Thus, communication between processes looks very much like ordinary file reads and writes.

**1.5.4 Input/Output**

Every operating system has an I/O subsystem for managing its I/O devices.

- Some of the I/O software is device independent, applies to many or all I/O devices equally well.

- Other parts of it, such as device drivers, are specific to particular I/O devices.

**1.5.5 Protection**

As an example, Files in UNIX are protected by assigning each one a 9-bit binary protection code. The protection code consists of three 3-bit fields, one for the owner, one for other members of the owner’s group, and one for everyone else. Each field has a bit for **r**ead access, a bit for **w**rite access, and a bit for e**x**ecute access. These 3 bits are known as the **rwx bits**, such as *rwxr-x--x*. For a directory, *x* indicates search permission. A dash means that the corresponding permission is absent.

**1.5.6 The Shell**

When logs in, a shell is started up. The shell has the terminal as standard input and standard output. It starts out by typing the prompt, a character such as a dollar sign, which tells the user that the shell is waiting to accept a command.

**1.5.7 Ontogeny Recapitulates Phylogeny**

Large Memories, Protection Hardware, Disks, Virtual Memory

Ideas invented in one context and later thrown out when the context changes (assembly-language programming, monoprogramming, single-level directories, etc.) only to reappear in a different context often a decade later.

### 1.6 SYSTEM CALLS

Making a system call is like making a special kind of procedure call, only system calls enter the kernel and procedure calls do not.



**1.6.1 System Calls for Process Management**

Fork is the only way to create a new process in POSIX. The fork call returns a value, which is zero in the child and equal to the child’s **PID (Process IDentifier)** in the parent.

To wait for the child to finish, the parent executes a waitpid system call, which just waits until the child terminates. Waitpid can wait for a specific child, or for any old child by setting the first parameter to −1.

Execve has three parameters: the name of the file to be executed, a pointer to the argument array, and a pointer to the environment array.

Exit, which processes should use when they are finished executing, has one parameter, the exit status (0 to 255), which is returned to the parent via statloc in the waitpid system call.

```c
#define TRUE 1

while (TRUE) {                          /* repeat forever */
    type_prompt();                      /* display prompt on the screen */
    read_command(command, parameters);  /* read input from terminal */
    if (fork() != 0) {                  /* fork off child process */
        /* Parent code. */
        waitpid(−1, &status, 0);        /* wait for child to exit */
    } else {
        /* Child code. */
        execve(command, parameters, 0); /* execute command */
    }
}
```

Consider the case of a command such as

cp file1 file2

used to copy *file1* to *file2*. After the shell has forked, the child process locates and executes the file *cp* and passes to it the names of the source and target files.

main(argc, argv, envp)

- *argc* is a count of the number of items on the command line, including the program name.

- *argv* is a pointer to an array. Element i of that array is a pointer to the ith string on the command line.

- *envp* is a pointer to the environment, an array of strings containing assignments of the form *name = value* used to pass information.

Processes in UNIX have their memory divided up into three segments: the **text segment** (i.e., the program code), the **data segment** (i.e., the variables), and the **stack segment**.

**1.6.2 System Calls for File Management**
